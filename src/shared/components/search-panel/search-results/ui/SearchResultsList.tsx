import React, { useState } from "react"
import { Forward, Check } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import type { Country } from "@/shared/api/requests/countries/countries.type"
import { useSearchContext } from "@/shared/hooks/useSearchContext"
import TextHighlight from "./TextHighlight"
import { AnimatePresence, motion } from "framer-motion"

interface SearchResultsListProps {
  data: Country[]
}

const SearchResultsList = ({ data }: SearchResultsListProps) => {

  const { state, dispatch } = useSearchContext()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      setCurrentIndex((prev) => Math.min(prev + 1, data.length - 1))
    }
    if (e.key === "ArrowUp") {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
    if (e.key === "Enter") {
      handleToggle(data[currentIndex])
    }
  }

  const handleToggle = (country: Country) => {
    const isSelected = state.selectedCountries.some((item) => item.id === country.cca3)

    if (isSelected) {
      dispatch({ type: "REMOVE_COUNTRY", payload: country.cca3 })
    } else {
      dispatch({
        type: "ADD_COUNTRY",
        payload: { id: country.cca3, name: country.name.common },
      })
    }
  }


  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="flex flex-col outline-none"
    >
      <AnimatePresence mode="popLayout">
        {data.map((country, idx) => {
          const isSelected = state.selectedCountries.some((item) => item.id === country.cca3)
          const isHighlighted = idx === currentIndex

          return (
            <motion.div
              key={country.cca3}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}>
              <div
                key={country.cca3}
                onClick={() => {
                  handleToggle(country)
                  setCurrentIndex(idx)
                }}
                className={cn(
                  "p-2 flex items-center gap-2 rounded-sm bg-white text-sm font-medium border cursor-pointer select-none transition-colors",
                  "border-transparent hover:bg-gray-50 hover:border-neutral-200",
                  isHighlighted && "bg-gray-50 border-neutral-200",
                )}
              >
                {isSelected ? (
                  <Check className="size-4 text-green-500 min-w-4" />
                ) : (
                  <Forward className="size-4 opacity-50 min-w-4" />
                )}
                <TextHighlight text={country.name.common} query={state.query} />
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(SearchResultsList)
