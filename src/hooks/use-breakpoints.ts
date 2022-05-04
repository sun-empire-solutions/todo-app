import { useMemo } from "react"
import { useScreenDimensions } from "use-screen-dimensions"

const MOBILE_BREAKPOINT = 600

const useBreakPoints = () => {
  const { width } = useScreenDimensions()
  const isMobile = useMemo(() => width <= MOBILE_BREAKPOINT, [width])

  return { isMobile }
}

export { useBreakPoints }
