/* eslint-disable react/prop-types */
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cookies from "js-cookie";

function ProtectedRoutes({ redirectTo }) {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
