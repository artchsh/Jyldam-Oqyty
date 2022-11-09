import React, { useEffect, useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const SignInComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/profile')
  }, [user, loading])
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className=""
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don&apos;t have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default SignInComponent
