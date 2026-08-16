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
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white dark:bg-white dark:text-black">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={photo}
      alt={`${name} profile`}
      onError={() => setHasError(true)}
      className="h-24 w-24 rounded-full object-cover"
    />
  )
}