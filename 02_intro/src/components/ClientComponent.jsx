"use client"
import React from 'react'

const ClientComponent = ({children}) => {
    console.log("This is Client Component");
  return (
    <div>ClientComponent
    {children}
    </div>
  )
}

export default ClientComponent