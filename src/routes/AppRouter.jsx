import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound"
import ProtectedRoute from "../components/ProtectedRoute"


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/users/:id"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    );
}