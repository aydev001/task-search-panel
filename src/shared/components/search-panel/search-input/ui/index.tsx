import * as React from "react"
import { X, Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/input-group"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
  regex?: RegExp
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value = "", onChange, onClear, regex, placeholder = "Search country...", ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)
    const [isInvalid, setIsInvalid] = React.useState(false)

   
    React.useEffect(() => {
      setInternalValue(value)
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      setInternalValue(val)

      if (regex && !regex.test(val)) {
        setIsInvalid(true)
        return
      }

      setIsInvalid(false)
      onChange?.(e) 
    }

    const handleClear = () => {
      setInternalValue("")
      setIsInvalid(false)
      onClear?.()
    }

    const isFilled = Boolean(internalValue && internalValue.toString().length > 0)

    return (
      <InputGroup
        className={cn(
          "bg-white w-full mb-1 transition-colors",
          isInvalid ? "border-red-500 bg-red-50" : "border-muted",
          className
        )}
      >
        <InputGroupInput
          ref={ref}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />

        <InputGroupAddon>
          <Search className="w-4 h-4 text-muted-foreground" />
        </InputGroupAddon>

        {isFilled && (
          <InputGroupAddon align="inline-end">
            <Button
              type="button"
              onClick={handleClear}
              variant="ghost"
              size="icon"
              className="w-7 h-7 rounded-full hover:bg-transparent text-muted-foreground hover:text-foreground active:opacity-80"
            >
              <X className="w-4 h-4" />
            </Button>
          </InputGroupAddon>
        )}
      </InputGroup>
    )
  }
)

export default SearchInput
