import { populateUsers, populatePosts, populateAlbums, populatePhotos } from '../store'

export const populateUsersThunk = () => async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  dispatch(populateUsers(data))
}

export const populatePostsThunk = userId => async dispatch => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  const data = await response.json()
  dispatch(populatePosts(data))
}

export const populateAlbumsThunk = userId => async dispatch => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  )
  const data = await response.json()
  dispatch(populateAlbums(data))
}

export const populatePhotosThunk = albumId => async dispatch => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  )
  const data = await response.json()
  dispatch(populatePhotos(data))
}