import { ArrowUp, ArrowDown, CornerDownLeft } from "lucide-react"

const SearchResultsFooter = () => {
  return (
    <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground border-t mt-2 pt-2">
      <div className="flex items-center gap-1">
        <ArrowUp className="size-3" /> <ArrowDown className="size-3" /> <span>Navigate</span>
      </div>
      <div className="flex items-center gap-1">
        <CornerDownLeft className="size-3" /> <span>Select</span>
      </div>
    </div>
  )
}

export default SearchResultsFooter
