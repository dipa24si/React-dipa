import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function RoleRedirect() {
  const { isAdmin } = useAuth();

  return <Navigate to={isAdmin ? "/admin" : "/member"} replace />;
}
