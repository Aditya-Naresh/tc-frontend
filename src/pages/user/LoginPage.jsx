import React, { useState } from 'react'
import TutorLogin from '../../components/tutor/TutorLogin'
import StudentLogin from '../../components/student/StudentLogin'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [isTutor, setIsTutor] = useState(false)
  const studentButtonClass = isTutor? 'bg-green-700' : 'bg-green-500';
  const tutorButtonClass = isTutor? 'bg-green-500' : 'bg-green-700';
  return (
    <>
    <div className='flex items-center h-52 justify-center  bg-green-950'>
      <button className= {`${tutorButtonClass}  border border-green-800 text-black px-4 py-2 rounded-lg  hover:bg-green-400 transition duration-200 font-bold`} onClick={() => setIsTutor(true)}>Tutor</button> 
      <button className={`${studentButtonClass} border border-green-800 text-black px-4 py-2 rounded-lg  hover:bg-green-400 transition duration-200 font-bold`} onClick={() => setIsTutor(false)}>Student</button>
    </div>
    <div className="flex items-center justify-center mt-24">
      {isTutor? <TutorLogin /> : <StudentLogin />}      
    </div>
    </>
  )
}

export default LoginPage