'use client' // Error components must be Client Components
import { ErrorMessage } from 'components/errorMessage'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorMessage reset={reset} />
}
