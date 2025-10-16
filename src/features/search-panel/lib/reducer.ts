import type { SearchAction, SearchState } from "./data"

export const initialSearchState: SearchState = {
  query: "",
  selectedCountries: [],
}

export function searchReducer(
  state: SearchState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload.toLowerCase() }

    case "ADD_COUNTRY":
      if (state.selectedCountries.some(item => item.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.payload],
      }

    case "REMOVE_COUNTRY":
      return {
        ...state,
        selectedCountries: state.selectedCountries.filter(
          (country) => country.id !== action.payload
        ),
      }

    case "CLEAR_ALL":
      return { ...state, selectedCountries: [] }

    default:
      return state
  }
}
