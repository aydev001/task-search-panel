import * as React from "react"
import TagItem from "./TagItem"
import { useSearchContext } from "@/shared/hooks/useSearchContext"
import { AnimatePresence, motion } from "framer-motion"

const SearchTags: React.FC = () => {
  const { state, dispatch } = useSearchContext()

  const handleRemove = React.useCallback(
    (id: string) => {
      dispatch({ type: "REMOVE_COUNTRY", payload: id })
    },
    [dispatch]
  )

  return (
    <div className="flex flex-wrap items-center shadow-xs border gap-1 bg-white w-full p-1 min-h-[30px] rounded-md my-1">
      {state.selectedCountries.length > 0 ? (
        <AnimatePresence mode="popLayout">
          {state.selectedCountries.map((country) => (
            <motion.div
              key={country.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <TagItem
                key={country.id}
                tag={{ id: country.id, label: country.name }}
                onRemove={handleRemove}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
      <div className="text-sm text-muted-foreground text-center w-full">
        No tags selected
      </div>
      )}
    </div>
  )
}

export default React.memo(SearchTags)
