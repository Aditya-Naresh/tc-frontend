import React from "react";
import LoginPage from "./pages/user/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Add import for BrowserRouter and Routes
import HomePage from "./pages/user/HomePage.jsx";
import UserPrivateRoute from "./privateRoutes/UserPrivateRoute.jsx";
import RegisterPage from "./pages/user/RegisterPage.jsx";
import AdminLoginPage from "./pages/admin/AdminLoginPage.jsx";
import AdminPrivateRoute from "./privateRoutes/AdminPrivateRoute.jsx";
import AdminHomePage from "./pages/admin/AdminHomePage.jsx";
import AdminTutorManagement from "./pages/admin/AdminTutorManagement.jsx";
import AdminStudentManagement from "./pages/admin/AdminStudentManagement.jsx";

const App = () => {
  return (
    <div className="bg-blue-300 h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="login/" />
          <Route element={<RegisterPage />} path="register/" />

          <Route element={<AdminLoginPage/>} path="admin_login/"/>

          <Route element={<UserPrivateRoute />}>
            <Route element={<HomePage />} path="/" />
          </Route>

          <Route element={<AdminPrivateRoute />}>
            <Route element={<AdminHomePage />} path="admin/" />
            <Route element={<AdminTutorManagement />} path="admin/tutor/" />
            <Route element={<AdminStudentManagement />} path="admin/student" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
