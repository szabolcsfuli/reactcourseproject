import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
  const { user } = useSelector(state => state)
  return (
    <Card title={'Profile Page'}>
      {user.loggedIn ? (
        <>
          <p>Logged in</p>
          <p>{user.email}</p>
        </>
      ) : (
        <>please log in</>
      )}
    </Card>
  )
}

export default ProfilePage
