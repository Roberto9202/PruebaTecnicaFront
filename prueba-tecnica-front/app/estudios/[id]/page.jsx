'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

function page() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>page</div>
  )
}

export default page