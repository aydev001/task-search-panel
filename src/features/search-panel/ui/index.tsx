import { SearchProvider } from "@/providers/search-panel/SearchProvider"
import SearchPanelContent from "./SearchContent"

const SearchPanel = () => {
  return (
    <SearchProvider>
      <SearchPanelContent />
    </SearchProvider>
  )
}

export default SearchPanel