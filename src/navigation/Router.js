import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import * as Pages from '../pages'
// import { loader as AuthLoader } from '../pages/RootPage'

// import { useLoaderData, json, defer, Await } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.RootPage />,
    id: 'root',
    // loader: AuthLoader,
    children: [
      {
        index: true,
        element: <Pages.HomePage />
      },
      {
        path: 'login',
        element: <Pages.LoginPage />
      },
      {
        path: 'signup',
        element: <Pages.SignUpPage />
      },
      { path: 'profile', element: <Pages.ProfilePage /> },
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
