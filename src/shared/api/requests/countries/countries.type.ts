export interface Country {
  cca3: string;
  name: CountryName;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Record<string, LocalizedName>;
}

export interface LocalizedName {
  official: string;
  common: string;
}
