import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Trash } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  populatePlaylistsThunk,
  populateTracksThunk,
  removeTrackThunk,
  removePlaylistThunk
} from '../../api'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import AddTrackPage from './AddTrackPage'
import TrackListPage from './TrackListPage'
import Popup from '../../components/Popup'

const PlaylistsPage = () => {
  const dispatch = useDispatch()
  const { playlists, user, tracks } = useSelector(state => state)
  const { items } = playlists
  const [popupShow, setPopupShow] = useState(false)
  const [playlistUid, setPlaylistUid] = useState(null)

  useEffect(() => {
    dispatch(populatePlaylistsThunk())
    dispatch(populateTracksThunk())
  }, [])

  const deletePlaylist = () => {
    if (tracks.items) {
      Object.keys(tracks.items).forEach(key => {
        if (tracks.items[key].playlistUid === playlistUid) {
          dispatch(removeTrackThunk(key))
        }
      })
    }
    dispatch(removePlaylistThunk(playlistUid))
    setPlaylistUid(null)
    setPopupShow(false)
  }

  const onclickRemoveButton = key => {
    setPlaylistUid(key)
    setPopupShow(true)
  }

  const handleClose = () => {
    setPopupShow(false)
  }

  let countByPlaylist = {}

  if (tracks.items) {
    Object.keys(tracks.items).forEach(key => {
      let playlistUid = tracks.items[key].playlistUid
      if (!countByPlaylist[playlistUid]) {
        countByPlaylist[playlistUid] = 0
      }
      countByPlaylist[playlistUid] += 1
    })
  }
  const renderContent = () => {
    return user.loggedIn ? (
      <Accordion defaultActiveKey='0'>
        {Object.keys(items).map((key, index) => {
          return (
            <Accordion.Item eventKey={key} key={key}>
              <Accordion.Header>
                <div style={{ flex: 1 }}>{items[key].name}</div>
                <Trash
                  color='red'
                  style={{ marginRight: 10 }}
                  onClick={() => onclickRemoveButton(key)}
                />
                <Badge pill style={{ marginRight: 20 }}>
                  {countByPlaylist[key] ? countByPlaylist[key] : 0}
                </Badge>
                <div></div>
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
    )
  }

  return (
    <Card title={'Playlists'}>
      {items ? (
        renderContent()
      ) : (
        <p className='h6' style={{ marginBottom: 0 }}>
          no playlists
        </p>
      )}
      <Popup
        show={popupShow}
        title={'Delete Playlist'}
        handleClose={handleClose}
        handleOk={deletePlaylist}
      />
    </Card>
  )
}

export default React.memo(PlaylistsPage)
