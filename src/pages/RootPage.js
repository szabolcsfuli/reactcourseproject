import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'


function RootPage () {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootPage
