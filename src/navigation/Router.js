import React from 'react'
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
        path: 'playlists',
        children: [
          {
            index: true,
            element: <Pages.PlaylistsPage />
          },
          {
            path: 'new',
            element: <Pages.CreatePlaylistPage />
          }
        ]
      }
    ]
  }
])

export default router
