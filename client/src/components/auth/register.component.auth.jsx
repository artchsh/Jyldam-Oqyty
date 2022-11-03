import React from 'react'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { useIsAuthenticated } from 'react-auth-kit'

const SignInComponent = () => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  const [formData, setFormData] = React.useState({
    login: '',
    email: '',
    password: ''
  })

  const [error, setError] = React.useState()
  async function onSubmit (e) {
    e.preventDefault()
    axios
      .post('http://localhost:3030/api/auth/register', formData)
      .then((res) => {
        if (res.status === 200) {
          setError("you're registred now, go to login page")
        } else {
          setError('error occured. try again')
        }
      })
  }
  if (isAuthenticated()) {
    // If authenticated user, then redirect to his profile
    return <Navigate to={'/profile'} replace />
  } else {
    return (
            <div>
                <div>{error}</div>
                <form onSubmit={onSubmit} className='flex flex-col w-96 p-2'>
                    <input
                        className='text-black mt-2'
                        type={'login'}
                        onChange={(e) =>
                          setFormData({ ...formData, login: e.target.value })
                        }
                        placeholder='login'
                    />
                    <input
                        className='text-black mt-2'
                        type={'email'}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder='email'
                    />
                    <input
                        className='text-black mt-2'
                        type={'password'}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value
                          })
                        }
                        placeholder='password'
                    />

                    <button type='submit'>Submit</button>
                </form>
            </div>
    )
  }
}

export default SignInComponent
