import React, { useEffect } from 'react'
import Card from '../../components/Card'
// import { useLoaderData, defer /*json,  Await*/ } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { populatePlaylistsThunk, populateTracksThunk } from '../../api'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import AddTrackPage from './AddTrackPage'
import TrackListPage from './TrackListPage'

const PlaylistsPage = () => {
  const dispatch = useDispatch()
  const { playlists, user } = useSelector(state => state)
  const { items } = playlists

  useEffect(() => {
    dispatch(populatePlaylistsThunk())
    dispatch(populateTracksThunk())
  }, [])

  return (
    <Card title={'Playlists'}>
      {user.loggedIn ? (
        <Accordion defaultActiveKey='0'>
          {Object.keys(items).map((key, index) => {
            return (
              <Accordion.Item eventKey={key} key={key}>
                <Accordion.Header>
                  <div style={{ flex: 1 }}>{items[key].name}</div>
                  <Badge pill style={{ marginRight: 20 }}>
                    14
                  </Badge>
                </Accordion.Header>
                <Accordion.Body>
                  <TrackListPage playlistUid={key} />
                  <AddTrackPage playlistUid={key} style={{ marginTop: 30 }} />
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      ) : (
        <>Please log in</>
      )}
    </Card>
  )
}

export default React.memo(PlaylistsPage)
