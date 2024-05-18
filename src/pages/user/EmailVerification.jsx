import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/verify-email/", { "email":email, "token":token });
      if(response.status == 200){
        navigate('/login')
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700">
        <h1 className="text-4xl font-semibold text-white mb-8">Confirm Mail</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your OTP"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <br /> <br />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default EmailVerification;
