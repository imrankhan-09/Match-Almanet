import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">MM</div>
          <div>
            <h1 className="text-lg font-semibold">Match Making</h1>
            <div className="text-xs text-gray-500">Hybrid Profiles • Smart Matches</div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm px-3 py-1">Home</Link>

          {!user ? (
            <>
              <button onClick={() => navigate("/login")} className="text-sm px-3 py-1 border rounded">Login</button>
              <button onClick={() => navigate("/register")} className="text-sm px-3 py-1 bg-indigo-600 text-white rounded">Get Started</button>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-sm px-3 py-1 bg-indigo-600 text-white rounded">Dashboard</Link>
              <button onClick={() => logout()} className="text-sm px-3 py-1 border rounded">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
