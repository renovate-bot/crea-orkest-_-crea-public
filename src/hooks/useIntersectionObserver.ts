import React from 'react'

interface Props {
  enabled?: boolean
  ref: React.RefObject<Element> | null
  options?: IntersectionObserverInit
}

export const useIntersectionObserver = ({ enabled, ref, options }: Props) => {
  const [entry, setEntry] = React.useState<
    IntersectionObserverEntry | undefined
  >()

  const callback = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    if (!enabled) return
    if (!ref?.current) return
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || !ref.current) return

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [enabled, ref, options])

  return [entry]
}
