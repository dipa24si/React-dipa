import { Navigate, Outlet } from "react-router-dom";
import Loading from "./Loading";
import { useAuth } from "../context/useAuth";
import { normalizeRole } from "../utils/role";

export default function ProtectedRoute({ roles = [] }) {
  const { profile, user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const allowedRoles = roles.map((role) => normalizeRole(role));

  if (roles.length > 0 && !allowedRoles.includes(normalizeRole(profile?.role))) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
