import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminBreadcrumb from '../../components/admin/AdminBreadcrumb'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavbar name={"Admin Dashboard"} />
      <AdminBreadcrumb/>
    </div>
  )
}

export default AdminHomePage