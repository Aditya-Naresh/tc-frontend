import React from "react";
import AdminLogin from "../../components/admin/AdminLogin";

const AdminLoginPage = () => {
  return (
    <div className="h-screen bg-slate-800 w-screen">
      <div className="flex items-center h-52 justify-center  bg-slate-400">
        <h1 className="text-6xl font-bold font-serif">Admin Login</h1>
      </div>
      <div className="flex items-center justify-center mt-24">
        <AdminLogin />
      </div>
    </div>
  );
};

export default AdminLoginPage;
