import React, { useState } from 'react'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import { Trash } from 'react-bootstrap-icons'
import { removeTrackThunk } from '../../api'
import { useDispatch } from 'react-redux'
import Popup from '../../components/Popup'

const TrackListPage = props => {
  const { items } = useSelector(state => state.tracks)
  const [popupShow, setPopupShow] = useState(false)
  const [trackUid, setTrackUid] = useState(null)

  const dispatch = useDispatch()

  const deleteTrack = () => {
    dispatch(removeTrackThunk(trackUid))
    setTrackUid(null)
    setPopupShow(false)
  }

  const onclickRemoveButton = key => {
    setTrackUid(key)
    setPopupShow(true)
  }

  const handleClose = () => {
    setPopupShow(false)
  }

  const renderContent = () => {
    return (
      <ListGroup>
        {Object.keys(items)
          .filter(key => {
            return props.playlistUid === items[key].playlistUid
          })
          .map(key => {
            return (
              <ListGroup.Item key={key} style={{ flexDirection: 'row' }}>
                <div className='d-flex'>
                  <div className='p-2 flex-fill'>{items[key].name}</div>
                  <div className='p-2'>
                    <Trash
                      color='red'
                      style={{ marginRight: 10, cursor: 'pointer' }}
                      onClick={() => onclickRemoveButton(key)}
                    />
                  </div>
                </div>
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    )
  }
  return (
    <Card>
      {items ? (
        renderContent()
      ) : (
        <p className='h6' style={{ marginBottom: 0 }}>
          no tracks
        </p>
      )}
      <Popup
        show={popupShow}
        title={'Delete Track'}
        handleClose={handleClose}
        handleOk={deleteTrack}
      />
    </Card>
  )
}

export default React.memo(TrackListPage)
