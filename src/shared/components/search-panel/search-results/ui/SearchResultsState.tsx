import { Loader2, AlertTriangle } from "lucide-react"

interface SearchResultsStateProps {
  isLoading?: boolean
  isError?: boolean
  showEmpty?: boolean
}

const SearchResultsState = ({ isLoading, isError, showEmpty }: SearchResultsStateProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
        <Loader2 className="size-5 animate-spin mb-2" />
        <span className="text-sm">Loading results...</span>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-destructive">
        <AlertTriangle className="size-5 mb-2" />
        <span className="text-sm font-medium">Failed to load data</span>
      </div>
    )
  }

  if (showEmpty) {
    return (
      <div className="text-sm text-muted-foreground text-center py-6">
        No results found
      </div>
    )
  }

  return null
}

export default SearchResultsState
