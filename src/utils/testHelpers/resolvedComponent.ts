import type { ReactNode } from 'react'

export const resolvedComponent = async <T>(Component: unknown, props: T) => {
  if (typeof Component !== 'function') throw new Error('Need a Component')

  const ComponentResolved = (await Component(props)) as ReactNode
  return () => ComponentResolved
}
