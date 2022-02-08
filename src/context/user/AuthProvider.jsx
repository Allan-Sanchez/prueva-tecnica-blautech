import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    try {
      localStorage.setItem("token", token);
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
    }
  }, [token]);

  const contextValue = {
    token,
    login(token) {
      setToken(token);
    },
    logout() {
      localStorage.removeItem("token");
      setToken(null);
    },
    isLogged() {
      if (token === "null") {
        return false;
      }
      return true;
      // return !!token;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
