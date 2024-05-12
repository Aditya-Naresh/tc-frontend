import React from 'react'
import { useSelector } from 'react-redux';
import TutorDashboard from '../../components/tutor/TutorDashboard';
import StudentDashboard from '../../components/student/StudentDashboard';
import SignoutButton from '../../components/common/SignoutButton';

const HomePage = () => {
    const isTutor = useSelector(state => state.auth.user?.isTutor);
    return (
        <div>
            <SignoutButton/>
            {isTutor ? <TutorDashboard/> : <StudentDashboard/>}
        </div>
    );
}

export default HomePage