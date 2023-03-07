import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BemVindo from "../pages/BemVindo";
import Dashboard from "../pages/ADM/Dashboard";
import Login from "../pages/Login/index";
import Mockup from "../pages/Mockup";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

export default function Router({ ...props }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BemVindo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockup" element={<Mockup />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
