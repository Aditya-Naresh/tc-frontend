import React from 'react'
import { Link } from 'react-router-dom'
import SignoutButton from '../common/SignoutButton'

const StudentNavBar = ({name}) => {
  return (
    <div className="flex items-center h-52 justify-center  bg-cyan-400">
      <div className="w-1/3 flex items-start justify-start ml-5">
        <Link to='/'>Student</Link>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="w-1/3 flex items-end justify-end mr-3">
        <SignoutButton />
      </div>
    </div>
  )
}

export default StudentNavBar