export const selectPlatform = () => [
  { value: 'BR1', label: 'BR' },
  { value: 'EUN1', label: 'EUNE' },
  { value: 'EUW1', label: 'EUW' },
  { value: 'JP1', label: 'JP' },
  { value: 'KR', label: 'KR' },
  { value: 'LA1', label: 'LAS' },
  { value: 'LA2', label: 'LAN' },
  { value: 'NA1', label: 'NA' },
  { value: 'OC1', label: 'OCE' },
  { value: 'TR1', label: 'TR' },
  { value: 'RU', label: 'RU' },
  { value: 'PH2', label: 'PH' },
  { value: 'SG2', label: 'SG' },
  { value: 'TH2', label: 'TH' },
  { value: 'TW2', label: 'TW' },
  { value: 'VN2', label: ' VN' },
];

export const getRegion = (region: string) => {
  switch (region) {
    case 'NA1':
    case 'BR1':
    case 'LA1':
    case 'LA2':
    case 'OC1':
      return 'AMERICAS';
    case 'EUW1':
    case 'EUN1':
    case 'RU':
    case 'TR1':
      return 'EUROPE';
    case 'JP1':
    case 'KR':
      return 'ASIA';
    case 'PH2':
    case 'SG2':
    case 'TH2':
    case 'TW2':
    case 'VN2':
      return 'SEA';
    default:
      throw new Error('Invalid server');
  }
};
