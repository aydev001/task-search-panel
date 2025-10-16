import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"

export interface Tag {
  id: string
  label: string
}

interface TagItemProps {
  tag: Tag
  onRemove: (id: string) => void
}

const TagItem: React.FC<TagItemProps> = ({ tag, onRemove }) => {
  const handleClick = React.useCallback(() => {
    onRemove(tag.id)
  }, [onRemove, tag.id])

  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-1 rounded-sm px-2 py-1 border border-gray-200"
    >
      {tag.label}
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="h-3 w-3 p-0 text-muted-foreground hover:text-foreground"
        onClick={handleClick}
      >
        <X className="size-3" />
      </Button>
    </Badge>
  )
}

export default React.memo(TagItem)
