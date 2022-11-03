// system
import React from 'react'
import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import DeveloperPage from '../pages/Dev.page'
import MainPage from '../pages/Main.page'
import ProfilePage from '../pages/profile/Profile.page'
import LoginPage from '../pages/Auth/Login.page.auth'
import RegisterPage from '../pages/Auth/Register.page.auth'

// components

// logic
const RoutesComponent = () => {
  return (
        <BrowserRouter>
            <Routes>
                {/* main */}
                <Route path={'/'} element={<MainPage />} />

                {/* Authentication */}
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/register'} element={<RegisterPage />} />

                {/* Developer */}
                <Route path={'/dev'} element={<DeveloperPage />} />

                {/* Other */}
                <Route
                    path={'/profile'}
                    element={
                        <RequireAuth loginPath={'/login'}>
                            <ProfilePage />
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
  )
}
export default RoutesComponent
