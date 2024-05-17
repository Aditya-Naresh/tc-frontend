import React from 'react'
import { useSelector } from 'react-redux';
import TutorDashboard from '../../components/tutor/TutorDashboard';
import StudentDashboard from '../../components/student/StudentDashboard';
import TutorNavBar from '../../components/tutor/TutorNavBar';
import StudentNavBar from '../../components/student/StudentNavBar';

const HomePage = () => {
    const isTutor = useSelector(state => state.auth.user?.isTutor);
    return (
        <div>
            {isTutor? <TutorNavBar name={"Dashboard"}/> : <StudentNavBar name={"Dashboard"} />}
            {isTutor ? <TutorDashboard/> : <StudentDashboard/>}
        </div>
    );
}

export default HomePage