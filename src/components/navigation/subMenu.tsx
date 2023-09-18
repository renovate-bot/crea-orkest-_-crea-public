'use client'

import { MenuItem } from './menuItem'
import React from 'react'
import type { SubmenuItemFragment } from 'graphql/generated/graphql'

export interface SubMenuProps {
  label?: string | null
  item: string
}

export const SubMenu: React.FC<SubMenuProps> = ({ label, item }) => {
  const submenu: SubmenuItemFragment['menu'] = JSON.parse(item)
  const [visible, setVisible] = React.useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  if (!label) return null

  return (
    <li>
      <button
        disabled={Boolean(submenu?.length === 0)}
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
      {visible && (
        <ul>
          {submenu?.map((item) => (
            <MenuItem
              key={item.id}
              slug={item?.link?.slug}
              label={item.label}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
