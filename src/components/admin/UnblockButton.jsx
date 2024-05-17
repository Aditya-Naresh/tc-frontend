import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UnblockButton = ({ id, isTutor, link }) => {
  const  navigate = useNavigate()
  const location = useLocation()
  const handleUnblock = async (e) => {
    e.preventDefault()
    let updated_val = {
      id: id,
      is_active: true,
      is_blocked: false,
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

   
  };
  return (
    <button
      onClick={handleUnblock}
      className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
    >
      UnblockButton
    </button>
  );
};

export default UnblockButton;
