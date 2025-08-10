import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/_components/layout";
import Characters from "@/modules/Characters";
import Login from "@/modules/Login";
import Episodes from "@/modules/Episodes";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Characters />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/characters"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Characters />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/episodes"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Episodes />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
