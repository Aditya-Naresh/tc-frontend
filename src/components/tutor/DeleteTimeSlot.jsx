import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

const DeleteTimeSlot = ({id, reRender}) => {
    const token = useSelector((state) => state.auth.tokens.accessToken)
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/booking/edit_slot/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            reRender(`Deleted ${id}`)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="ml-4 text-red-600 hover:text-red-900 hover:cursor-pointer" onClick={handleDelete}>Delete</div>
  )
}

export default DeleteTimeSlot