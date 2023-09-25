import React from 'react'

interface Props {
  condition?: boolean
  ref: React.RefObject<Element> | null
}

export const useIntersectionObserver = ({ condition, ref }: Props) => {
  const [entry, setEntry] = React.useState<
    IntersectionObserverEntry | undefined
  >()

  const callback = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    if (!condition) return
    if (!ref?.current) return
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || !ref.current) return

    const observer = new IntersectionObserver(callback, {
      threshold: undefined,
      root: undefined,
      rootMargin: undefined,
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [condition, ref])

  return [entry]
}
