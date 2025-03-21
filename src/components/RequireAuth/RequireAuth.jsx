import { Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { LoginForm } from "../LoginForm/LoginForm";
import { Loader } from "../Loader/Loader";

export const RequireAuth = () => {
  const { loginData, loading } = useAuth();

  if (loading) {
    return <Loader />; 
  }

  if (loginData === null) {
    return <LoginForm />;
  }

  return <Outlet />;
};
