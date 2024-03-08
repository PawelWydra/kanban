import React from 'react'
import Column from '@/components/Column'

export const ColumnContainer = () => {


  return (
    <div className="flex gap-8 px-8 py-4">
    <Column />
    <Column />
    <Column />
  </div>
  )
}