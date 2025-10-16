import React from "react"

interface TextHighlightProps {
  text: string
  query: string
}

const TextHighlight: React.FC<TextHighlightProps> = ({ text, query }) => {
  if (!query) return <span>{text}</span>

  const parts = text.split(new RegExp(`(${query})`, "gi"))

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="bg-yellow-300 rounded-xs">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  )
}

export default TextHighlight
