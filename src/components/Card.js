import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function (props) {
  return (
    <Container style={props.style}>
      {props.title && (
        <Card.Header style={{marginBottom: 20}} as={props.headStyle ? props.headStyle : 'h1'}>
          {props.title}
        </Card.Header>
      )}
      <Card.Body>{props.children}</Card.Body>
    </Container>
  )
}
