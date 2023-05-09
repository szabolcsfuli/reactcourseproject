import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './navigation/Router'
import Container from 'react-bootstrap/Container'

function App () {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
