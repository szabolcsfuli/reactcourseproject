import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'
import { logOutFB } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Navigation () {
  const { user } = useSelector(state => state)
  const navigate = useNavigate()
  const onClickLogout = () => {
    logOutFB()
    navigate('/')
  }

  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>React Course - Playlist</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Playlists' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/playlists'>All</NavDropdown.Item>
              <NavDropdown.Item href='/playlists/new'>New</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/customhook'>Custom Hook</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>            
            {user.loggedIn ? (
              <Nav.Link onClick={onClickLogout} href='#'>
                Log Out
              </Nav.Link>
            ) : (
              <Nav.Link href='/login'>Log In</Nav.Link>
            )}            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation
