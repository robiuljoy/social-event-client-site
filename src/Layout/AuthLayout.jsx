import React from "react";
import LoginForm from "../pages/LoginForm";
import { Outlet } from "react-router";
import Register from "../pages/Register";

const AuthLayout = () => {
  return (
    <div>
      <Outlet>
        <LoginForm></LoginForm>
        <Register></Register>
      </Outlet>
    </div>
  );
};

export default AuthLayout;
