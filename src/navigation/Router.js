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
      },
      {
        path: 'customhook',
        element: <Pages.CustomHookPage />
      }
    ]
  }
])

export default router
