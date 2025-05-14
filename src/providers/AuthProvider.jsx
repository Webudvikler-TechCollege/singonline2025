import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hent login-data fra localStorage ved start
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user_data");

    if (accessToken && userData) {
      try {
        const parsedUserData = userData ? JSON.parse(userData) : null; // ✅ Kun parse hvis data findes
        setLoginData({
          access_token: accessToken,
          user: parsedUserData,
        });
      } catch (error) {
        console.error("Fejl ved parsing af userData:", error);
        setLoginData(null);
      }
    }
    setLoading(false);  
  }, [loading]);

  // Login-funktion
  const login = (data) => {
    setLoginData(data);

    // Gem kun relevante data i localStorage
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token || ""); // Undgå null fejl
    if (data.user) {
      localStorage.setItem("user_data", JSON.stringify(data.user));
    }

    return true;
  };

  // Logout-funktion
  const logout = () => {
    setLoginData(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_data");
    return true;
  };

  return (
    <AuthContext.Provider value={{ loginData, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
