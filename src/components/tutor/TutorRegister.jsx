import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TutorRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8; // Minimum 8 characters
  };

  const validateConfirmPassword = (password, password2) =>{
    return password === password2
  }

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (!validateConfirmPassword(formData.password, formData.password2)){
        setErrorMessage("Passwords donot match")
        return
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/tutor_register/",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          password2: formData.password2,
        }
      );

      if (response.status === 201) {
        navigate('/')
      }
    } catch (error) {
      if (error.response) {
        console.log("Login failed", error.response.data.detail);
        setErrorMessage(error.response.data.detail);
      } else {
        console.log("Login failed", error.message);
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div className="bg-teal-700 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center h-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-4 bg-inherit font-bold">
        Tutor Register
      </h1>
      {<p className="text-lg font-bold text-red-500">{errorMessage}</p>}

      <form className="w-full">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-950"
          >
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="Enter your first name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-950"
          >
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Enter your last name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-950"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your email address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-950"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter your password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password2"
            className="block text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-950"
          >
            Password:
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={handleChange}
            value={formData.password2}
            placeholder="Confirm your password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 sm:mt-6 md:mt-4 lg:mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm sm:text-base md:text-sm lg:text-base px-5 py-2.5 text-center me-2 mb-2"
        >
          Register
        </button>
      </form>
     <p className="font-bold">
        
        Already have an account ? 
        </p> 
        <Link to='/login' className="text-blue-100">Login</Link>
    </div>
  );
};

export default TutorRegister;
