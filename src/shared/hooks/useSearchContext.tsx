import { SearchContext } from "@/providers/search-panel/SearchProvider"
import { useContext } from "react"

export function useSearchContext() {
  const context = useContext(SearchContext)
  
  if (!context) {
    throw new Error("useContext is undefined")
  }
  return context
}
