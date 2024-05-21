import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeleteTimeSlot from "./DeleteTimeSlot";

const TutorDashboard = () => {
  const token = useSelector((state) => state.auth.tokens.accessToken);
  const [timeSlots, setTimeSlots] = useState([]);
  const [render, setRender] = useState('')

  const reRender = (value) => {
    setRender(value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/booking/time_slot/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setTimeSlots(response.data);
        console.log("updated", timeSlots);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [render]);
  return (
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Time Slots</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Day
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Start Time
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              End Time
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {timeSlots.map((slot, index) => (
            <tr key={index}>
              {" "}
              {/* Using index as a key for simplicity */}
              <td className="px-6 py-4 whitespace-nowrap">{slot.day}</td>
              <td className="px-6 py-4 whitespace-nowrap">{slot.start_time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{slot.end_time}</td>
              <td className="px-6 py-4 mr-6 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
                <DeleteTimeSlot id={slot.id} reRender={reRender}/> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-10 rounded"
    >
      Create a new TimeSlot
    </button>
    </div>
  );

  
};

export default TutorDashboard;
