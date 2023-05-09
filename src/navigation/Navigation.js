import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navigation () {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>React Course - Playlist</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            {/* <Nav.Link href='playlists'>Playlists</Nav.Link> */}
            <NavDropdown title='Playlists' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/playlists'>All</NavDropdown.Item>
              <NavDropdown.Item href='/playlists/new'>New</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricing'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation




// const Navigation = () => {
//   const token = useRouteLoaderData('root')
//   return (
//     <header className={classes.header}>
//       <nav>
//         <ul className={classes.list}>
//           <li>
//             <NavLink
//               to='/'
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to='playlists'
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//             >
//               Playlist
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
