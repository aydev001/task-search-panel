import type { SearchAction, SearchState } from "@/features/search-panel/lib/data"
import { initialSearchState, searchReducer} from "@/features/search-panel/lib/reducer"
import React, { createContext, useReducer, type Dispatch, type ReactNode } from "react"

interface SearchContextType {
  state: SearchState
  dispatch: Dispatch<SearchAction>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState)

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}
