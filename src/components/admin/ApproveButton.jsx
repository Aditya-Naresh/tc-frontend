import axios from 'axios'
import React from 'react'

const ApproveButton = ({id, token}) => {
    const handleApprove = async (e) => {
        e.preventDefault()
        const updated_val = {
            id: id,
            is_approved : true,
        }
        const response = await axios.patch(
            `http://127.0.0.1:8000/accounts/admin_tutor_approval/${id}`,
            updated_val,{
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }
        )
        if(response.status == 200){
            window.location.reload()
        } 
    }
  return (
    <button
    onClick={handleApprove}
      className="bg-stone-300 hover:bg-stone-500 text-black font-bold py-2 px-2 rounded m-auto border border-slate-600 w-auto"
    >
      Approve Tutor
    </button>
  )
}

export default ApproveButton