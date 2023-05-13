import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    email: null,
    uid: null
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true
      state.email = action.payload.email
      state.uid = action.payload.uid
    },
    logout: (state, action) => {
      state.loggedIn = false
      state.email = null
      state.uid = null
    }
  }
})

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    items: {}
  },
  reducers: {
    populatePlaylists: (state, action) => {
      state.items = action.payload
    }
  }
})

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    items: {}
  },
  reducers: {
    populateTracks: (state, action) => {
      state.items = action.payload
    }
  }
})

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    playlists: playlistSlice.reducer,
    tracks: tracksSlice.reducer
  }
})

export const { login, logout } = userSlice.actions
export const { populatePlaylists } = playlistSlice.actions
export const { populateTracks } = tracksSlice.actions

