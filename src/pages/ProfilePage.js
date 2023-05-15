import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
  const { user } = useSelector(state => state)
  return (
    <Card title={'Profile Page'}>
      {user.loggedIn ? (
        <>
          <p className='h3'>Logged in</p>
          <p style={styles.userText}>{user.email}</p>
          <p>
            User id: <span style={styles.userText}>{user.uid}</span>
          </p>
        </>
      ) : (
        <>please log in</>
      )}
    </Card>
  )
}

const styles = {
  userText: {
    fontWeight: 'bold'
  }
}

export default ProfilePage
