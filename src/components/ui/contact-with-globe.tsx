"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
  GeometryObject,
} from "topojson-specification";
import type { GeoPermissibleObjects } from "d3";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const JETTONE_CONTACT_LINKS = [
  {
    icon: Mail,
    label: "info@jettone.ai",
    href: "mailto:info@jettone.ai",
    subtext: "Official Inquiries",
  },
  {
    icon: Phone,
    label: "+971 4 287 0000",
    href: "tel:+97142870000",
    subtext: "Direct Executive Line",
  },
  {
    icon: MapPin,
    label: "Dubai, United Arab Emirates",
    href: "#",
    subtext: "Global Financial Hub",
  },
];

export interface GlobeWireframeProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  graticuleColor?: string;
  graticuleOpacity?: number;
  sphereOutlineColor?: string;
  sphereOutlineWidth?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  rotateToLocation?: string | [number, number];
  rotateCities?: string[];
  rotationSpeed?: number;
  initialRotation?: [number, number];
  enableInteraction?: boolean;
  showGraticule?: boolean;
  animationDuration?: number;
  startAsGlobe?: boolean;
  countryFillColor?: string;
  countryHoverColor?: string;
  variant?: "wireframe" | "wireframesolid" | "solid";
  scale?: number;
  backgroundColor?: string;
}

interface GeoFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection;
  };
}

interface CustomProjection extends d3.GeoProjection {
  alpha(value: number): CustomProjection;
  alpha(): number;
}

const cityCoordinates: Record<string, [number, number]> = {
  dubai: [25.2048, 55.2708],
  london: [51.5074, -0.1278],
  "new york": [40.7128, -74.006],
  tokyo: [35.6762, 139.6503],
  singapore: [1.3521, 103.8198],
  "hong kong": [22.3193, 114.1694],
  zurich: [47.3769, 8.5417],
  frankfurt: [50.1109, 8.6821],
  paris: [48.8566, 2.3522],
  sydney: [-33.8688, 151.2093],
  mumbai: [19.076, 72.8777],
  chicago: [41.8781, -87.6298],
};

function orthographicRaw(x: number, y: number): [number, number] {
  const cosy = Math.cos(y);
  return [cosy * Math.sin(x), Math.sin(y)];
}

function equirectangularRaw(lambda: number, phi: number): [number, number] {
  return [lambda, phi];
}

function interpolateProjection(
  raw0: (lambda: number, phi: number) => [number, number],
  raw1: (lambda: number, phi: number) => [number, number],
): CustomProjection {
  let t = 0;

  const createRawProjection = (
    alpha: number,
  ): ((lambda: number, phi: number) => [number, number]) => {
    return (lambda: number, phi: number): [number, number] => {
      const [x0, y0] = raw0(lambda, phi);
      const [x1, y1] = raw1(lambda, phi);
      return [x0 + alpha * (x1 - x0), y0 + alpha * (y1 - y0)];
    };
  };

  const projection = d3.geoProjection(
    createRawProjection(t),
  ) as unknown as CustomProjection;

  const alphaMethod = ((value?: number): CustomProjection | number => {
    if (value !== undefined) {
      t = +value;
      const newProjection = d3.geoProjection(
        createRawProjection(t),
      ) as unknown as CustomProjection;

      if (projection.scale()) newProjection.scale(projection.scale());
      if (projection.translate())
        newProjection.translate(projection.translate());
      if (projection.rotate()) newProjection.rotate(projection.rotate());
      if (projection.precision())
        newProjection.precision(projection.precision());

      newProjection.alpha = alphaMethod as CustomProjection["alpha"];

      return newProjection;
    }
    return t;
  }) as CustomProjection["alpha"];

  projection.alpha = alphaMethod;

  return projection;
}

export function GlobeWireframe({
  width,
  height,
  className = "aspect-square w-full max-w-150",
  strokeColor = "#00E676",
  strokeWidth = 0.8,
  graticuleColor = "#00E676",
  graticuleOpacity = 0.14,
  sphereOutlineColor = "#F5D327",
  sphereOutlineWidth = 1.2,
  autoRotate = true,
  autoRotateSpeed = 0.45,
  rotateToLocation,
  rotateCities = ["dubai", "london", "new york", "tokyo", "singapore", "hong kong"],
  rotationSpeed = 3500,
  initialRotation = [-55, -25], // Centered near Dubai
  enableInteraction = true,
  showGraticule = true,
  startAsGlobe = true,
  countryFillColor = "rgba(0, 230, 118, 0.05)",
  countryHoverColor = "rgba(245, 211, 39, 0.25)",
  variant = "wireframesolid",
  scale = 1,
  backgroundColor = "transparent",
}: GlobeWireframeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState<[number, number]>(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const rotationInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationAnimFrame = useRef<number | null>(null);
  const rotationStartTime = useRef<number | null>(null);
  const rotationFrom = useRef<[number, number]>([0, 0]);
  const rotationTo = useRef<[number, number]>([0, 0]);
  const animationFrame = useRef<number | null>(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const useResponsive = !width && !height;
  const finalWidth = useResponsive ? dimensions.width : width || 800;
  const finalHeight = useResponsive ? dimensions.height : height || 500;

  const defaultStrokeColor = strokeColor || "#00E676";
  const defaultGraticuleColor = graticuleColor || "#00E676";
  const defaultSphereOutlineColor = sphereOutlineColor || "#F5D327";
  const defaultCountryFillColor = countryFillColor || "none";
  const defaultBackgroundColor = backgroundColor || "transparent";

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const updateDimensions = () => {
      if (container && useResponsive) {
        const width = container.offsetWidth || 300;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();

    if (useResponsive) {
      resizeObserver.current = new ResizeObserver(updateDimensions);
      resizeObserver.current.observe(container);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      observer.unobserve(container);
    };
  }, [useResponsive]);

  useEffect(() => {
    let isMounted = true;
    const loadWorldData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        );
        const world = (await response.json()) as WorldAtlasTopology;
        if (!isMounted) return;
        const countries = feature(world, world.objects.countries)
          .features as GeoFeature[];
        setWorldData(countries);
      } catch (error) {
        console.error("Error loading world data:", error);
        const fallbackData: GeoFeature[] = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            } as unknown as GeometryObject,
            properties: {},
          },
        ];
        if (isMounted) setWorldData(fallbackData);
      }
    };
    loadWorldData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!autoRotate || !isVisible || isDragging || rotateCities.length > 0) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }

    const rotate = () => {
      setRotation((prev) => [(prev[0] + autoRotateSpeed) % 360, prev[1]]);
      animationFrame.current = requestAnimationFrame(rotate);
    };

    animationFrame.current = requestAnimationFrame(rotate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [autoRotate, autoRotateSpeed, isVisible, isDragging, rotateCities.length]);

  const animateRotationTo = useCallback(
    (target: [number, number], duration = 1200) => {
      if (rotationAnimFrame.current) {
        cancelAnimationFrame(rotationAnimFrame.current);
      }

      rotationFrom.current = rotationRef.current;
      rotationTo.current = target;
      rotationStartTime.current = performance.now();

      const animate = (time: number) => {
        const elapsed = time - (rotationStartTime.current || 0);
        const t = Math.min(elapsed / duration, 1);

        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const lon =
          rotationFrom.current[0] +
          (rotationTo.current[0] - rotationFrom.current[0]) * eased;

        const lat =
          rotationFrom.current[1] +
          (rotationTo.current[1] - rotationFrom.current[1]) * eased;

        setRotation([lon, lat]);

        if (t < 1) {
          rotationAnimFrame.current = requestAnimationFrame(animate);
        }
      };

      rotationAnimFrame.current = requestAnimationFrame(animate);
    },
    [],
  );

  useEffect(() => {
    if (rotateCities.length === 0 || !isVisible) return;

    const rotateToNextCity = () => {
      const nextIndex = (currentCityIndex + 1) % rotateCities.length;
      const city = rotateCities[nextIndex].toLowerCase();
      const coordinates = cityCoordinates[city];

      if (coordinates) {
        animateRotationTo(
          [-coordinates[1], -coordinates[0]],
          rotationSpeed * 0.6,
        );
        setCurrentCityIndex(nextIndex);
      }
    };

    const city = rotateCities[currentCityIndex].toLowerCase();
    const coordinates = cityCoordinates[city];

    if (coordinates) {
      animateRotationTo(
        [-coordinates[1], -coordinates[0]],
        rotationSpeed * 0.6,
      );
    }

    rotationInterval.current = setInterval(rotateToNextCity, rotationSpeed);

    return () => {
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [
    rotateCities,
    currentCityIndex,
    rotationSpeed,
    isVisible,
    animateRotationTo,
  ]);

  useEffect(() => {
    if (!rotateToLocation) return;

    let coordinates: [number, number];
    if (typeof rotateToLocation === "string") {
      const city = rotateToLocation.toLowerCase();
      coordinates = cityCoordinates[city] || [0, 0];
    } else {
      coordinates = rotateToLocation;
    }

    setRotation([-coordinates[1], -coordinates[0]]);
  }, [rotateToLocation]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !enableInteraction) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    setRotation((prev) => [
      prev[0] + dx * 0.45,
      Math.max(-85, Math.min(85, prev[1] - dy * 0.45)),
    ]);

    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0 || !isVisible) return;
    if (useResponsive && dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    if (defaultBackgroundColor !== "transparent") {
      const radius = (Math.min(finalWidth, finalHeight) / 2) * scale * 0.9;
      svg
        .append("circle")
        .attr("cx", finalWidth / 2)
        .attr("cy", finalHeight / 2)
        .attr("r", radius)
        .attr("fill", defaultBackgroundColor);
    }

    const projection = d3
      .geoOrthographic()
      .scale((Math.min(finalWidth, finalHeight) / 2) * scale * 0.88)
      .translate([finalWidth / 2, finalHeight / 2])
      .rotate([rotation[0], rotation[1]])
      .precision(0.1);

    const path = d3.geoPath().projection(projection);

    // Graticule Grid
    if (showGraticule && graticuleOpacity > 0) {
      try {
        const graticule = d3.geoGraticule();
        const graticulePath = path(graticule());
        if (graticulePath) {
          svg
            .append("path")
            .datum(graticule())
            .attr("d", graticulePath)
            .attr("fill", "none")
            .attr("stroke", defaultGraticuleColor)
            .attr("stroke-width", 0.7)
            .attr("opacity", graticuleOpacity);
        }
      } catch (error) {
        console.error("Error creating graticule:", error);
      }
    }

    // Country Polygons
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d: GeoFeature) => {
        try {
          const pathString = path(d as unknown as GeoPermissibleObjects);
          if (!pathString) return "";
          if (
            typeof pathString === "string" &&
            (pathString.includes("NaN") || pathString.includes("Infinity"))
          ) {
            return "";
          }
          return pathString;
        } catch {
          return "";
        }
      })
      .attr("fill", defaultCountryFillColor)
      .attr("stroke", defaultStrokeColor)
      .attr("stroke-width", strokeWidth)
      .attr("opacity", 0.95)
      .style("visibility", function (this: SVGPathElement) {
        const pathData = d3.select(this).attr("d");
        return pathData && pathData.length > 0 && !pathData.includes("NaN")
          ? "visible"
          : "hidden";
      })
      .on("mouseenter", function (this: SVGPathElement) {
        d3.select(this).attr("fill", countryHoverColor);
      })
      .on("mouseleave", function (this: SVGPathElement) {
        d3.select(this).attr("fill", defaultCountryFillColor);
      });

    // Outer Sphere Outline
    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", defaultSphereOutlineColor)
          .attr("stroke-width", sphereOutlineWidth)
          .attr("opacity", 0.85);
      }
    } catch (error) {
      console.error("Error creating sphere outline:", error);
    }
  }, [
    worldData,
    rotation,
    isVisible,
    finalWidth,
    finalHeight,
    defaultStrokeColor,
    strokeWidth,
    defaultGraticuleColor,
    graticuleOpacity,
    defaultSphereOutlineColor,
    sphereOutlineWidth,
    showGraticule,
    defaultCountryFillColor,
    countryHoverColor,
    scale,
    defaultBackgroundColor,
    useResponsive,
    dimensions.width,
  ]);

  return (
    <div ref={containerRef} className={cn("relative select-none", className)}>
      <svg
        ref={svgRef}
        width={finalWidth}
        height={finalHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={
          useResponsive
            ? "w-full h-full opacity-0 transition-opacity duration-700"
            : ""
        }
        style={{
          cursor: enableInteraction
            ? isDragging
              ? "grabbing"
              : "grab"
            : "default",
          opacity: useResponsive ? (dimensions.width > 0 ? 1 : 0) : 1,
        }}
      />
    </div>
  );
}

export const FormDots = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal";
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 flex items-center justify-center overflow-hidden",
          isHorizontal ? "w-full" : "h-full",
          className,
        )}
        {...props}
      >
        <div
          className={cn("relative", isHorizontal ? "w-full h-4" : "h-full w-4")}
        >
          <div
            className="absolute inset-0 bg-repeat text-[#00E676]/35"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: isHorizontal ? "8px 100%" : "100% 8px",
              maskImage: isHorizontal
                ? "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
                : "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          />
        </div>
      </SeparatorPrimitive.Root>
    );
  },
);
FormDots.displayName = "FormDots";

export interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function ContactWithGlobe({
  title = "Start a Conversation with JETTONE.",
  subtitle = "GET IN TOUCH",
  description = "Connect with our Dubai team to discuss investment partnerships, trading consultancy, or intelligent trading technology.",
  className,
}: ContactWithGlobeProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field: string, val: string) => {
    if (field === "name" && !val.trim()) return "Full name is required";
    if (field === "email") {
      if (!val.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid email address";
    }
    if (field === "message" && !val.trim()) return "Message is required";
    return "";
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validate(field, formData[field as keyof typeof formData]),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: validate("name", formData.name),
      email: validate("email", formData.email),
      message: validate("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitted(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      enquiryType: "General Enquiry",
      message: "",
    });
    setErrors({});
    setTouched({});
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <section
      className={cn(
        "relative w-full bg-[#06140E] overflow-hidden py-12 sm:py-16 2xl:py-20",
        className,
      )}
    >
      {/* Subtle Ambient Background Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#00E676_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.12)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-3.5 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/35 shadow-[0_0_12px_rgba(0,230,118,0.2)]"
          >
            <span className="text-xs text-[#00E676] font-mono font-bold tracking-wider uppercase">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Start a Conversation with{" "}
            <span className="text-[#F5D327]">JETTONE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="font-body text-sm sm:text-base text-[#BCE2CD] max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* 2-Column Grid: Left (Wireframe Globe & Direct Channels) · Right (Luxury Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Inquiries & Rotating Financial Globe */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono font-semibold uppercase text-[#F5D327] tracking-wider">
                Direct Channels
              </span>
              <h3 className="font-headline text-2xl font-bold text-white">
                Get in Touch
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#A8D3BA] leading-relaxed">
                Connect directly with our advisors and market specialists in Dubai.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              {JETTONE_CONTACT_LINKS.map(({ icon: Icon, label, href, subtext }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + i * 0.08,
                    ease: smoothEase,
                  }}
                  className="group flex items-center gap-3.5 p-3 rounded-xl bg-gradient-to-r from-[#0F3524]/60 to-[#0A2619]/60 border border-[#287348]/45 hover:border-[#00E676]/70 hover:bg-[#0F3524]/80 transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center shrink-0 group-hover:bg-[#00E676] group-hover:text-[#0A2619] text-[#F5D327] transition-all shadow-[0_0_10px_rgba(0,230,118,0.2)]">
                    <Icon className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-[#88A896] uppercase tracking-wider">
                      {subtext}
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#F5D327] transition-colors">
                      {label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Rotating D3 Wireframe Globe Window */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F3524]/50 via-[#0A2619]/60 to-[#06180F]/80 border border-[#287348]/50 shadow-inner p-2 h-64 sm:h-72 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.14)_0%,transparent_70%)] pointer-events-none" />
              
              <GlobeWireframe
                className="w-full aspect-square max-w-[270px] sm:max-w-[300px]"
                variant="wireframesolid"
                autoRotate
                autoRotateSpeed={0.4}
                strokeColor="#00E676"
                strokeWidth={0.8}
                graticuleColor="#00E676"
                graticuleOpacity={0.15}
                sphereOutlineColor="#F5D327"
                sphereOutlineWidth={1.2}
                countryFillColor="rgba(0, 230, 118, 0.08)"
                countryHoverColor="rgba(245, 211, 39, 0.35)"
              />
              
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#06140E] to-transparent" />
              <div className="absolute top-3 left-3 bg-[#0A2619]/90 border border-[#2E7A4E]/60 px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#00E676] font-semibold flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                Global Telemetry
              </div>
            </div>
          </motion.div>

          {/* Right Column: Luxury Obsidian-Emerald Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-[#287348]/60 bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-6 sm:p-8 lg:p-9 flex flex-col gap-5 shadow-2xl"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#F5D327] tracking-wider block mb-1">
                Direct Communication
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#BCE2CD]">
                Submit your inquiry and our team will get in touch.
              </p>
            </div>

            <FormDots />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Alexander Vance"
                    className={cn(
                      "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none transition-all duration-200",
                      touched.name && errors.name
                        ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                    )}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA]">
                    Company / Entity <span className="text-[#88A896] text-[10px] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Partner Entity"
                    className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="alexander@domain.com"
                    className={cn(
                      "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none transition-all duration-200",
                      touched.email && errors.email
                        ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                    )}
                  />
                  {touched.email && errors.email && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA]">
                    Phone Number <span className="text-[#88A896] text-[10px] font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] font-mono outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Enquiry Type Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#A8D3BA]">
                  Enquiry Category
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => handleChange("enquiryType", e.target.value)}
                  className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200 cursor-pointer"
                >
                  <option value="Investment Partner" className="bg-[#06180F] text-white">Investment Partner</option>
                  <option value="Trading Consultancy" className="bg-[#06180F] text-white">Trading Consultancy</option>
                  <option value="JBot / Technology" className="bg-[#06180F] text-white">JBot / Technology</option>
                  <option value="General Enquiry" className="bg-[#06180F] text-white">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                  <span>Message</span>
                  <span className="text-[#00E676]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Outline your requirements, objectives, or questions..."
                  className={cn(
                    "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none resize-none transition-all duration-200",
                    touched.message && errors.message
                      ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                      : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                  )}
                />
                {touched.message && errors.message && (
                  <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 h-auto bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] hover:brightness-105 text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.4]" />
                </Button>
              </div>

              {/* Submission Feedback Toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 rounded-xl bg-[#0D2D1E] border border-[#00E676]/60 text-[#00E676] text-xs sm:text-sm font-medium flex items-center gap-2.5 shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0" />
                    <span>Your enquiry has been received. Our team will contact you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
