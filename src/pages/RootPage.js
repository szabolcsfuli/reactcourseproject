import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import { auth } from '../firebase'
import { login, logout } from '../store'
import { useDispatch } from 'react-redux'

function RootPage () {
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])
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
