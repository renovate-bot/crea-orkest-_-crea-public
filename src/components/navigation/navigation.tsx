import { MenuItem } from './menuItem'
import React from 'react'
import { SubMenu } from './subMenu'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'

export const Navigation: React.FC = async () => {
  const { data } = await getGeneralInfo()
  if (!data?.general) return null

  return (
    <div>
      <ul>
        {data.general.menu.map((item) => {
          if ('link' in item) {
            return (
              <MenuItem
                key={item.id}
                slug={item?.link?.slug}
                label={item.label}
              />
            )
          }

          if ('menu' in item) {
            return (
              <SubMenu
                key={item.id}
                label={item.label}
                item={JSON.stringify(item.menu)}
              />
            )
          }

          return <MenuItem key={item.id} label={'Error'} />
        })}
      </ul>
      <code>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </code>
    </div>
  )
}
