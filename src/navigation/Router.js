import { createBrowserRouter } from 'react-router-dom'
import * as Pages from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.RootPage />,
    id: 'root',
    children: [
      {
        index: true,
        element: <Pages.HomePage />
      },
      {
        path: '/playlists',
        element: <Pages.PlaylistsPage />,
        children: [
          {
            path: 'playlists',
            index: true,            
          },
          {
            path: '/playlists/createPlaylist',
            element: <Pages.CreatePlaylist />
          }
        ]
      }
    ]
  }
])

export default router
