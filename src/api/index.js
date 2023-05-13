import { populatePlaylists, populateTracks } from '../store'

export const populatePlaylistsThunk = () => async dispatch => {
  const response = await fetch(
    'https://reactcourse-b4f01-default-rtdb.europe-west1.firebasedatabase.app/playlists.json'
  )
  const data = await response.json()
  dispatch(populatePlaylists(data))
}

export const populateTracksThunk = () => async dispatch => {
  const response = await fetch(
    'https://reactcourse-b4f01-default-rtdb.europe-west1.firebasedatabase.app/tracks.json'
  )
  const data = await response.json()
  dispatch(populateTracks(data))
}

export const addPlaylist = async item => {
  await fetch(
    'https://reactcourse-b4f01-default-rtdb.europe-west1.firebasedatabase.app/playlists.json',
    {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json'
      }
    }
  )
}

export const addTrackThunk = item => async dispatch => {
  await fetch(
    'https://reactcourse-b4f01-default-rtdb.europe-west1.firebasedatabase.app/tracks.json',
    {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json'
      }
    }
  )
  dispatch(populateTracksThunk())
}
