export interface Country {
  id: string
  name: string
}

export interface SearchState {
  query : string
  selectedCountries: Country[]
}

export type SearchAction =
  | { type: "SET_QUERY"; payload: string } 
  | { type: "ADD_COUNTRY"; payload: Country }
  | { type: "REMOVE_COUNTRY"; payload: string } 
  | { type: "CLEAR_ALL" }