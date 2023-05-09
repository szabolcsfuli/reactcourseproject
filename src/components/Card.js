import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function (props) {
  return (
    <Container>
      {props.title && (
        <Card.Header as={props.headStyle ? props.headStyle : 'h1'}>
          {props.title}
        </Card.Header>
      )}
      <Card.Body>{props.children}</Card.Body>
    </Container>
  )
}
