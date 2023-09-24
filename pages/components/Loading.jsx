import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-xl font-bold">
      <Image src={'/naga_ken_logo.jpeg'} width={70} height={70} alt="HomePicksのロゴ" />
      Loading...
    </div>
  )
}
