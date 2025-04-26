import BackButton from '@/components/BackButton'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
        <BackButton>
            ← Back to Rendering Lesson
        </BackButton>
        {children}
    </>
  )
}
