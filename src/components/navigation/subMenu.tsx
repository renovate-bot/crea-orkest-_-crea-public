'use client'

import { MenuItem } from './menuItem'
import React from 'react'
import type { SubmenuItemFragment } from 'graphql/generated/graphql'
import { getSubmenu } from 'graphql/getters/getSubmenu'

export interface SubMenuProps {
  label?: string | null
  id: string
}

export const SubMenu: React.FC<SubMenuProps> = ({ label, id }) => {
  const [visible, setVisible] = React.useState(false)
  const [submenu, setSubmenu] = React.useState<
    SubmenuItemFragment['menu'] | undefined
  >()

  const handleClick = () => {
    setVisible(!visible)
  }

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await getSubmenu({ id })
      if (!data) return
      setSubmenu(data)
    }
    fetchData()
  }, [id])

  return (
    <li>
      <button type="button" onClick={handleClick}>
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
