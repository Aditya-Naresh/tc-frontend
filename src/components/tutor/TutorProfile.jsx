import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const TutorProfile = () => {
  const [formData, setFormData] = useState({
    display_name:"",
    rate: "",
    subjects: "",
  });
  const [image, setImage] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("")

  const token = useSelector((state) => state.auth.tokens.accessToken);
  useEffect(() => {
    const fetchData = async () => {
      console.log("token", token);
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/tutor_profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        const fetchedData = response.data;
        setFormData({
          rate: fetchedData.rate,
          subjects: fetchedData.subjects,
        });
        setProfilePictureUrl(fetchedData.profile_picture)
        
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = {
      display_name: formData.display_name,
      rate: formData.rate,
      subjects: formData.subjects,
      profile_picture: image,
    };

    try {
      const response = await axios.patch(
        "http://127.0.0.1:8000/accounts/tutor_profile/",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate('/')
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center h-auto p-4 sm:p-6 bg-lime-500">
      <form onSubmit={handleSubmit}>
      <label htmlFor="display_name">Display Name</label>
        <br />
        <input
          type="text"
          name="display_name"
          onChange={handleChange}
          value={formData.display_name}
        />
        <br />
        <label htmlFor="subjects">Subjects</label>
        <br />
        <input
          type="text"
          name="subjects"
          onChange={handleChange}
          value={formData.subjects}
        />
        <br />
        <label htmlFor="rate">Hourly Rate</label>
        <br />
        <input
          type="text"
          name="rate"
          onChange={handleChange}
          value={formData.rate}
        />
        <br /> <br />
        <label htmlFor="profile_pic"  value={image}>
          Profile Picture
        </label>
        {profilePictureUrl && <img src={profilePictureUrl} alt="Existing Profile Picture" style={{height: "50px", width: "50px"}}/>}
        <br />
        <input type="file" onChange={handleImageChange}/>
        <br /> <br />
        <button className="mt-4 sm:mt-6 md:mt-4 lg:mt-6 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm sm:text-base md:text-sm lg:text-base px-5 py-2.5 text-center me-2 mb-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default TutorProfile;
