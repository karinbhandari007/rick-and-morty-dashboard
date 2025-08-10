import { useAuth } from "@/contexts/MockAuthContext";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoutesProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoutesProps> = ({
  children,
}) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};
