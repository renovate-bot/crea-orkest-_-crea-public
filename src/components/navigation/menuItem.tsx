import React from 'react'

export interface MenuItemProps {
  slug?: string | null
  label?: string | null
}

export const MenuItem: React.FC<MenuItemProps> = ({ slug, label }) => {
  if (!slug) return <li>No link specified</li>
  if (!label) return <li>No label specified</li>

  // should be a reusable function and simple to configure
  if (slug === 'homepage') {
    slug = '/'
  }

  return (
    <li>
      <a href={slug}>{label}</a>
    </li>
  )
}
