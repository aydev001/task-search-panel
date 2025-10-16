import React, { type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MotionWrapperProps {
  isVisible: boolean
  children: ReactNode
  className?: string
  duration?: number
  scaleFrom?: number
  scaleTo?: number
  onExitComplete?: () => void
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  isVisible,
  children,
  className,
  duration = 0.3,
  scaleFrom = 0.8,
  scaleTo = 1,
  onExitComplete,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: scaleFrom }}
          animate={{ opacity: 1, scale: scaleTo }}
          exit={{ opacity: 0, scale: scaleFrom }}
          transition={{ duration }}
          className={className}
          onAnimationComplete={(definition) => {
            if (definition === "exit" && onExitComplete) {
              onExitComplete()
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MotionWrapper
