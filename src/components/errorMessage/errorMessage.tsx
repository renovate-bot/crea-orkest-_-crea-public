import React from 'react'

interface Props {
  reset: () => void
}

export const ErrorMessage: React.FC<Props> = ({ reset }: Props) => {
  return <ErrorMessage reset={reset} />
}
