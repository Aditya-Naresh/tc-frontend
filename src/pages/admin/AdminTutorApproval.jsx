import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminBreadcrumb from '../../components/admin/AdminBreadcrumb'
import ApproveButton from '../../components/admin/ApproveButton'

const AdminTutorApproval = () => {
  const [data, setData] = useState([])
  const token = useSelector(state => state.auth.tokens.accessToken)
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/admin_tutor_approval/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      }catch (error){
        console.log("Error fetching data", error);
      }
    }
    fetchData()
  }, [data])
  return (
    <div>
        <AdminNavbar name={"Tutor Approval"} />
        <AdminBreadcrumb />
        <div className="flex justify-center items-center mx-auto">
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Rate</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Subjects</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Action</th>

          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
              <tr key={index}>
                <td>{item.display_name}</td> 
                <td>{item.rate}</td> 
                <td>{item.subjects}</td> 
                <td><ApproveButton id={item.id} token={token} /></td> 
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminTutorApproval