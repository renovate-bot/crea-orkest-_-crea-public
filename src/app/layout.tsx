import React from 'react'

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="nl-NL">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
