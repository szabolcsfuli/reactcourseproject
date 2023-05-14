import React from 'react'
import Card from '../../components/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as formik from 'formik'
import * as yup from 'yup'
import { loginFB } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { Formik } = formik

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
  })

  const handleSubmit = fields => {
    const { email, password } = fields
    let loggedIn = false
    try {
      loggedIn = loginFB(email, password)
    } catch (e) {
      console.log(e)
    }

    if (loggedIn) {
      navigate('/playlists')
    }
  }

  return (
    <Card title={'Log In'}>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          email: 'admin@admin.com',
          password: '123456'
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='v1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId='v2'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default LoginPage
