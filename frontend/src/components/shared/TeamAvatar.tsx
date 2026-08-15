'use client'

import { useState } from 'react'

interface TeamAvatarProps {
  name: string
  photo: string
}

export function TeamAvatar({ name, photo }: TeamAvatarProps) {
  const [hasError, setHasError] = useState(false)

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (hasError) {
    return (
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white dark:bg-white dark:text-black">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={photo}
      alt={`${name} profile`}
      onError={() => setHasError(true)}
      className="mb-5 h-20 w-20 rounded-full object-cover"
    />
  )
}