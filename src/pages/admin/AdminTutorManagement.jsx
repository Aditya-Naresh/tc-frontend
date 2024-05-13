import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminBreadcrumb from '../../components/admin/AdminBreadcrumb'
import UserManagementTable from '../../components/admin/UserManagementTable'

const AdminTutorManagement = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/admin/tutor_list')
                console.log(response.data);
                setData(response.data);
            }catch(error){
                console.log("Error fetching data", error);
            }
        }

        fetchData()
    }, [])
  return (
    <div>
        <AdminNavbar name={"Tutor"} />
        <AdminBreadcrumb />
        <UserManagementTable data={data} link={'admin/tutor'}/>
    </div>
  )
}

export default AdminTutorManagement