import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlockButton = ({ id, isTutor, link }) => {
  const  navigate = useNavigate()
  const location = useLocation()
  const handleBlock = async (e) => {
    e.preventDefault()
    let updated_val = {
      id: id,
      is_active: false,
      is_blocked: true,
    };
    let response;
    if (isTutor) {
      response = await axios.patch(
        `http://127.0.0.1:8000/admin/update_tutor/${id}`,
        updated_val
      );
    } else {
      response = await axios.patch(
        `http://127.0.0.1:8000/admin/update_student/${id}`,
        updated_val
      );
    }

    if(response.status == 200){
        window.location.reload()
    }
  };
  return (
    <button
      onClick={handleBlock}
      className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-2 rounded m-auto border border-slate-600 w-auto"
    >
      BlockButton
    </button>
  );
};

export default BlockButton;
