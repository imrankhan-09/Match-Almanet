import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";

export default function ProfileForm() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <div className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <div className="text-sm text-gray-500">Name</div>
            <div className="font-medium">{user?.name || "—"}</div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-500">Email</div>
            <div className="font-medium">{user?.email || "—"}</div>
          </div>
          <p className="text-sm text-gray-600">Work is Pendin....</p>
        </div>
      </div>
    </div>
  );
}
