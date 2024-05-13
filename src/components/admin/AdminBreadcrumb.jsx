import React from "react";
import { Link } from "react-router-dom";

const AdminBreadcrumb = () => {
  return (
    <div className="bg-slate-400 w-1/6 ml-0 float-left">
      <div className="w-auto h-24 border border-cyan-50 flex justify-center items-center">
      <Link to='/admin/student'>Students</Link>
      </div>
      <div className="w-auto h-24 border border-cyan-50 flex justify-center items-center">
        <h1>
          <Link to='/admin/tutor'>Tutors</Link>
        </h1>
      </div>
      <div className="w-auto h-24 border border-cyan-50 flex justify-center items-center">
        <h1>Sessions</h1>
      </div>
    </div>
  );
};

export default AdminBreadcrumb;
