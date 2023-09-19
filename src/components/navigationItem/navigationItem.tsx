import React from 'react'
import { slugFormatter } from './utils/slugFormatter'

export interface NavigationItemProps {
  slug?: string | null
  label?: string | null
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  slug,
  label,
}) => {
  if (!slug) return <li>No link specified</li>
  if (!label) return <li>No label specified</li>

  return (
    <li>
      <a href={slugFormatter(slug)}>{label}</a>
    </li>
  )
}
