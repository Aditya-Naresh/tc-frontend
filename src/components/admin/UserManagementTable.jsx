import React from "react";
import UnblockButton from "./UnblockButton";
import BlockButton from "./BlockButton";

const UserManagementTable = ({ data, link }) => {
  return (
    <div className="flex justify-center items-center mx-auto">
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Email</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-8 py-4 bg-stone-300">
                {row.first_name} {row.last_name}
              </td>
              <td className="border px-8 py-4 bg-stone-300">{row.email}</td>
              <td className="border px-8 py-4 bg-stone-300">{row.is_blocked? <UnblockButton  id={row.id} isTutor={row.is_tutor} link={link} /> : <BlockButton id={row.id} isTutor={row.is_tutor} link={link}/>}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementTable;
