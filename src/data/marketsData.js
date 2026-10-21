/**
 * 12 Key Global Financial Markets & Liquidity Hubs for JETTONE
 */
export const GLOBAL_MARKETS = [
  {
    id: 'dubai',
    name: 'Dubai (DIFC)',
    city: 'Dubai',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    location: [25.2048, 55.2708],
    timezone: 'Asia/Dubai',
    tzCode: 'GST',
    exchange: 'DFM / Nasdaq Dubai',
    subtitle: 'Global Hub',
    landmark: 'Burj Khalifa',
    image: '/images/landmarks/dubai.jpg',
    openHour: 10,
    openMinute: 0,
    closeHour: 15,
    closeMinute: 0,
  },
  {
    id: 'new-york',
    name: 'New York',
    city: 'New York',
    country: 'United States',
    flag: '🇺🇸',
    location: [40.7128, -74.0060],
    timezone: 'America/New_York',
    tzCode: 'EDT',
    exchange: 'NYSE / NASDAQ',
    subtitle: 'Wall Street & Equities',
    landmark: 'Empire State Building',
    image: '/images/landmarks/new-york.jpg',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
  },
  {
    id: 'london',
    name: 'London',
    city: 'London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    location: [51.5074, -0.1278],
    timezone: 'Europe/London',
    tzCode: 'BST',
    exchange: 'London Stock Exchange',
    subtitle: 'Global FX Capital',
    landmark: 'The Shard',
    image: '/images/landmarks/london.jpg',
    openHour: 8,
    openMinute: 0,
    closeHour: 16,
    closeMinute: 30,
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    city: 'Tokyo',
    country: 'Japan',
    flag: '🇯🇵',
    location: [35.6762, 139.6503],
    timezone: 'Asia/Tokyo',
    tzCode: 'JST',
    exchange: 'Tokyo Stock Exchange',
    subtitle: 'Asian Equity Centre',
    landmark: 'Tokyo Tower',
    image: '/images/landmarks/tokyo.jpg',
    openHour: 9,
    openMinute: 0,
    closeHour: 15,
    closeMinute: 30,
  },
  {
    id: 'singapore',
    name: 'Singapore',
    city: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    location: [1.3521, 103.8198],
    timezone: 'Asia/Singapore',
    tzCode: 'SGT',
    exchange: 'Singapore Exchange (SGX)',
    subtitle: 'Pan-Asian Liquidity Hub',
    landmark: 'Marina Bay Sands',
    image: '/images/landmarks/singapore.jpg',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 0,
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    city: 'Hong Kong',
    country: 'China',
    flag: '🇭🇰',
    location: [22.3193, 114.1694],
    timezone: 'Asia/Hong_Kong',
    tzCode: 'HKT',
    exchange: 'HKEX',
    subtitle: 'Gateway to Greater China',
    landmark: 'Bank of China Tower',
    image: '/images/landmarks/hong-kong.jpg',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    flag: '🇩🇪',
    location: [50.1109, 8.6821],
    timezone: 'Europe/Berlin',
    tzCode: 'CEST',
    exchange: 'Deutsche Börse (Xetra)',
    subtitle: 'Eurozone Financial Core',
    landmark: 'Main Tower',
    image: '/images/landmarks/frankfurt.jpg',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
  },
  {
    id: 'zurich',
    name: 'Zurich',
    city: 'Zurich',
    country: 'Switzerland',
    flag: '🇨🇭',
    location: [47.3769, 8.5417],
    timezone: 'Europe/Zurich',
    tzCode: 'CEST',
    exchange: 'SIX Swiss Exchange',
    subtitle: 'Private Wealth & Assets',
    landmark: 'Swiss Prime Tower',
    image: '/images/landmarks/zurich.jpg',
    openHour: 9,
    openMinute: 0,
    closeHour: 17,
    closeMinute: 30,
  },
  {
    id: 'sydney',
    name: 'Sydney',
    city: 'Sydney',
    country: 'Australia',
    flag: '🇦🇺',
    location: [-33.8688, 151.2093],
    timezone: 'Australia/Sydney',
    tzCode: 'AEST',
    exchange: 'ASX',
    subtitle: 'Asia-Pacific Gateway',
    landmark: 'Sydney Opera House',
    image: '/images/landmarks/sydney.jpg',
    openHour: 10,
    openMinute: 0,
    closeHour: 16,
    closeMinute: 0,
  },
  {
    id: 'chicago',
    name: 'Chicago',
    city: 'Chicago',
    country: 'United States',
    flag: '🇺🇸',
    location: [41.8781, -87.6298],
    timezone: 'America/Chicago',
    tzCode: 'CDT',
    exchange: 'CME / CBOE',
    subtitle: 'Derivatives & Futures',
    landmark: 'Willis Tower',
    image: '/images/landmarks/chicago.jpg',
    openHour: 8,
    openMinute: 30,
    closeHour: 15,
    closeMinute: 15,
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    city: 'Mumbai',
    country: 'India',
    flag: '🇮🇳',
    location: [19.0760, 72.8777],
    timezone: 'Asia/Kolkata',
    tzCode: 'IST',
    exchange: 'BSE / NSE',
    subtitle: 'Fast-Growing Powerhouse',
    landmark: 'Bombay Stock Exchange',
    image: '/images/landmarks/mumbai.jpg',
    openHour: 9,
    openMinute: 15,
    closeHour: 15,
    closeMinute: 30,
  },
  {
    id: 'toronto',
    name: 'Toronto',
    city: 'Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    location: [43.6532, -79.3832],
    timezone: 'America/Toronto',
    tzCode: 'EDT',
    exchange: 'Toronto Stock Exchange (TSX)',
    subtitle: 'North American Resources',
    landmark: 'CN Tower',
    image: '/images/landmarks/toronto.jpg',
    openHour: 9,
    openMinute: 30,
    closeHour: 16,
    closeMinute: 0,
  },
];

/**
 * Calculates live trading status, weekday, and formatted local time for a given market.
 */
export function getLiveMarketStatus(market, now = new Date()) {
  try {
    const partsFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: market.timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      weekday: 'short',
    });

    const parts = partsFormatter.formatToParts(now);
    const partMap = {};
    for (const p of parts) {
      partMap[p.type] = p.value;
    }

    const weekday = partMap.weekday || 'Mon';
    const hour = parseInt(partMap.hour || '12', 10);
    const minute = parseInt(partMap.minute || '0', 10);

    const isWeekend = weekday === 'Sat' || weekday === 'Sun';
    const currentMinutes = hour * 60 + minute;
    const openMinutes = market.openHour * 60 + market.openMinute;
    const closeMinutes = market.closeHour * 60 + market.closeMinute;

    let isOpen = false;
    let statusText = 'Market Closed';

    if (!isWeekend) {
      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        isOpen = true;
        statusText = 'Market Open';
      } else if (currentMinutes >= openMinutes - 60 && currentMinutes < openMinutes) {
        statusText = 'Pre-Market';
      }
    }

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: market.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const timeStr = timeFormatter.format(now);
    const formattedTime = `${timeStr} (${market.tzCode})`;

    return {
      isOpen,
      statusText,
      formattedTime,
      weekday,
      hour,
      minute,
    };
  } catch {
    return {
      isOpen: false,
      statusText: 'Market Closed',
      formattedTime: `--:-- (${market.tzCode})`,
      weekday: 'Mon',
      hour: 12,
      minute: 0,
    };
  }
}
