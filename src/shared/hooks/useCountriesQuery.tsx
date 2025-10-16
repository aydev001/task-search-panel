import { useQuery } from "@tanstack/react-query";
import { getCountryByName } from "../api/requests/countries/countries.req";

export function useCountryByName(name: string) {
  return useQuery({
    queryKey: ['country', name],
    queryFn: () => getCountryByName(name),
    enabled: !!name
  });
}
