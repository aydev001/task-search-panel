import { useState, useCallback, useEffect } from "react"
import SearchInput from "@/shared/components/search-panel/search-input/ui"
import SearchResults from "@/shared/components/search-panel/search-results/ui"
import { useCountryByName } from "@/shared/hooks/useCountriesQuery"
import { useDebounce } from "@/shared/hooks/useDebounce"
import SearchTags from "@/shared/components/search-panel/search-tags/ui"
import { useSearchContext } from "@/shared/hooks/useSearchContext"


const SearchPanelContent = () => {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 300)
    const { dispatch } = useSearchContext()
    const { data, isLoading, isError } = useCountryByName(debouncedQuery)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }, [])

    const handleClear = useCallback(() => {
        setQuery("")
    }, [])

    useEffect(() => {
        dispatch({ type: "SET_QUERY", payload: query })
    }, [debouncedQuery])

    return (
        <div className="w-[500px] max-sm:w-full mx-auto space-y-3 my-2">
            <SearchInput
                value={query}
                onChange={handleChange}
                onClear={handleClear}
                regex={/^[a-zA-Z\s]*$/}
                placeholder="Search country..."
            />

            <SearchTags />

            <SearchResults isLoading={isLoading} isError={isError} data={data} />
        </div>
    )
}

export default SearchPanelContent
