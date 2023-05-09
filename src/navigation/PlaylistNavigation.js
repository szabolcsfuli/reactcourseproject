import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const PlaylistNavigation = () => {
  //const token = useRouteLoaderData('root')
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/playlists'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/createPlaylist'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Create Playlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PlaylistNavigation
