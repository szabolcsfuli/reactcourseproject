import React from 'react'
import Card from '../../components/Card'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as formik from 'formik'
import * as yup from 'yup'
import { addTrackThunk } from '../../api'

const AddTrackPage = props => {
  const dispatch = useDispatch()
  const { Formik } = formik

  const schema = yup.object().shape({
    name: yup.string().required()
  })

  const handleSubmit = fields => {
    const { name } = fields
    dispatch(
      addTrackThunk({
        name: name,
        playlistUid: props.playlistUid
      })
    )
  }

  return (
    <Card title={''} headStyle={'h6'} style={props.style}>        
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: ''
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='v0'>
              <Form.Control
                placeholder='Add track'
                name='name'
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant='primary' type='submit'>
              +
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default AddTrackPage
