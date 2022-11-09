import React from 'react'
// import { AuthProvider } from 'react-auth-kit'
import RoutesComponent from './routes/router'
import './index.css'

function App () {
  return (
  // <AuthProvider authName={'_auth'} authType={'localstorage'}>
      <RoutesComponent />
  // </AuthProvider>
  )
}

export default App
