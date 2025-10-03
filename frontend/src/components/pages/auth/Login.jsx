import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        {error && (
          <div className="mb-4 text-center text-red-600 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-lg shadow-md font-medium"
          >
            {busy ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
