import React from 'react'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'

const TrackListPage = props => {
  const { items } = useSelector(state => state.tracks)

  return (
    <Card >
      <ListGroup>
        {Object.keys(items)
          .filter(key => {
            return props.playlistUid === items[key].playlistUid
          })
          .map(key => {
            return <ListGroup.Item key={key}>{items[key].name}</ListGroup.Item>
          })}
      </ListGroup>
    </Card>
  )
}

export default React.memo(TrackListPage)
