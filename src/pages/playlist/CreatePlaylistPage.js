import React from 'react'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as formik from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { addPlaylist } from '../../api'

const CreatePlaylistPage = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state)
  const { Formik } = formik

  const schema = yup.object().shape({
    name: yup.string().required()
  })

  const handleSubmit = fields => {
    const { name } = fields
    addPlaylist({
      name: name,
      userUid: user.uid
    })
    navigate('/playlists')
  }

  return (
    <Card title={'New Playlist'}>
      {user.loggedIn ? (
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
                <Form.Label>Playlist</Form.Label>
                <Form.Control
                  placeholder='Playlist'
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
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <>Please log in</>
      )}
    </Card>
  )
}

export default CreatePlaylistPage
