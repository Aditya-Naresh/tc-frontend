import React from 'react'
import SignoutButton from '../common/SignoutButton'

const AdminNavbar = () => {
  return (
    <div className='flex items-center h-52 justify-center  bg-slate-400'>
        <div className='w-1/3'>
            Dashboard
        </div>
        <div className='w-1/3'>
            Admin Panel
        </div>
        <div className='w-1/3 flex items-end justify-end mr-3'>
            <SignoutButton/>
        </div>

    </div>
  )
}

export default AdminNavbar