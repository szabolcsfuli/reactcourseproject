import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'

function RootPage () {
  console.log('RootPage')
  return (
    <>
      <main>
        <Navigation />
        <Outlet />
      </main>
    </>
  )
}

export default RootPage
