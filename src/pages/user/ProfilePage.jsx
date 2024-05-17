import React from 'react'
import { useSelector } from 'react-redux';
import TutorNavBar from '../../components/tutor/TutorNavBar';
import StudentNavBar from '../../components/student/StudentNavBar';
import TutorProfile from '../../components/tutor/TutorProfile';
import StudentProfile from '../../components/student/StudentProfile';

const ProfilePage = () => {
    const isTutor = useSelector(state => state.auth.user?.isTutor);
  return (
    <>
        {isTutor? <TutorNavBar name={"Tutor Profile"}/> : <StudentNavBar name={"Student Profile"} />}
    <div className='flex items-center h-52 justify-center mt-12'>
        {isTutor? <TutorProfile /> : <StudentProfile />}
    </div>
    </>
  )
}

export default ProfilePage