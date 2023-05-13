import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './navigation/Router'
import Container from 'react-bootstrap/Container'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
