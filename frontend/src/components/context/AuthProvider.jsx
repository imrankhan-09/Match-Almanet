import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// Hook to use auth easily
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // NOTE: AuthProvider must be rendered inside BrowserRouter
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  // Fake login - replace with real API call
  const login = async (email, password) => {
    if (!email || !password) throw new Error("Email & password required");
    // Simulate API response
    const fakeToken = "jwt_token_123456";
    const fakeUser = { name: "Demo User", email };

    setUser(fakeUser);
    setToken(fakeToken);
    localStorage.setItem("user", JSON.stringify(fakeUser));
    localStorage.setItem("token", fakeToken);

    navigate("/profile", { replace: true });
  };

  // Fake register - replace with real API call
  const register = async (name, email, password) => {
    if (!name || !email || !password) throw new Error("All fields required");
    const fakeToken = "jwt_token_123456";
    const fakeUser = { name, email };

    setUser(fakeUser);
    setToken(fakeToken);
    localStorage.setItem("user", JSON.stringify(fakeUser));
    localStorage.setItem("token", fakeToken);

    navigate("/profile", { replace: true });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const value = { user, token, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
