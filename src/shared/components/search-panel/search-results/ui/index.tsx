import React, { useState, useMemo } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import SearchResultsList from "./SearchResultsList"
import SearchResultsState from "./SearchResultsState"
import SearchResultsFooter from "./SearchResultsFooter"
import type { Country } from "@/shared/api/requests/countries/countries.type"

interface SearchResultsProps {
  data?: Country[]
  isLoading?: boolean
  isError?: boolean
}

const SearchResults = ({ data, isLoading, isError }: SearchResultsProps) => {
  const [sortAsc, setSortAsc] = useState(true)

  const showEmpty = !isLoading && !isError && (!data || data.length === 0)

  const sortedData = useMemo(() => {
    if (!data) return []
    return [...data].slice(0, 5).sort((a, b) => {
      const nameA = a.name?.common?.toLowerCase()
      const nameB = b.name?.common?.toLowerCase()
      if (nameA < nameB) return sortAsc ? -1 : 1
      if (nameA > nameB) return sortAsc ? 1 : -1
      return 0
    })
  }, [data, sortAsc])

  return (
    <div className="p-2 border bg-white rounded-md shadow-xs">
      <SearchResultsState isLoading={isLoading} isError={isError} showEmpty={showEmpty} />

      {!isLoading && !isError && sortedData.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-2 text-xs">
            <span className="font-medium text-gray-700">Countries</span>
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              Sort {sortAsc ? "A-Z" : "Z-A"} {sortAsc ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          <SearchResultsList data={sortedData} />
          <SearchResultsFooter />
        </>
      )}
    </div>
  )
}

export default React.memo(SearchResults)
