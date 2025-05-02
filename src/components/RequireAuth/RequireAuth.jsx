import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { Loader } from "../Loader/Loader";

export const RequireAuth = () => {
  const { loginData, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && loginData === null) {
      navigate("/login");
    }
  }, [loading, loginData, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (loginData === null) {
    return null; // Vent på navigation
  }

  return <Outlet />;
};
