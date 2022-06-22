import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminSidebarComponent from '../components/admin-component/AdminSidebarComponent'
import AdminLogInPage from '../pages/admin-page/admin-authentication/AdminLogInPage'

export default function AdminBasicRoute() {
  return (
    <>
      <Routes>
            <Route path="/admin/login" element={<AdminLogInPage/>} />
            <Route path="/admin/homePage" element={<AdminSidebarComponent/>} />
      </Routes>
    </>
  )
}

