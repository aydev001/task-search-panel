import httpClient from "../../httpClient";
import type { Country } from "./countries.type";

export async function getCountryByName(countryName?: string): Promise<Country[]> {
  if (!countryName) return [];

  const res = await httpClient.get<Country[]>(`name/${countryName}`, {
    params: { fields: "name,cca3" },
  });

  return res.data;
}
