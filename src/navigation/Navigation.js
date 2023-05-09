import { NavLink, useRouteLoaderData } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = () => {
  const token = useRouteLoaderData('root')
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/playlists'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Playlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
