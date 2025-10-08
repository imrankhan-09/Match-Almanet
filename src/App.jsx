// // src/App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/home/MatchHome";
// import Login from "./components/pages/auth/Login";
// import Register from "./components/pages/auth/Register";
// import ForgotPassword from "./components/pages/ForgotPassword";
// import Header from "./components/home/Header";
// import Footer from "./components/layout/Footer";
// import Dashboard from "./components/pages/Dashbord";
// import UserCreateForm from "./components/pages/CreateOrEditProfile";
// // CORRECT import for EditProfile — change path if your file is elsewhere
// import EditProfile from "./components/pages/EditProfile";

// export default function App() {
//   return (
//     <>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />

//             {/* Protected/User Routes */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/create-profile" element={<UserCreateForm />} />

//             {/* Support both URL styles so links won't break */}
//             <Route path="/edit-profile" element={<EditProfile />} />
//             <Route path="/profile/edit" element={<EditProfile />} />

//             {/* 404 fallback */}
//             <Route path="*" element={<div className="p-6">Page not found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }







import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/MatchHome";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import Header from "./components/home/Header";
import Footer from "./components/layout/Footer";
import UserCreateForm from "./components/pages/CreateProfile";
import Dashboard from "./components/pages/Dashbord";
import { UserProfileProvider } from "./components/context/UserProfileContext";
import EditProfile from "./components/profile/EditProfile";

export default function App() {
  return (
    <UserProfileProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-profile" element={<UserCreateForm />} />
            <Route path="/profile/edit" element={<EditProfile/>} />
            {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </UserProfileProvider>
  );
}




// // src/App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/home/MatchHome";
// import Login from "./components/pages/auth/Login";
// import Register from "./components/pages/auth/Register";
// import ForgotPassword from "./components/pages/ForgotPassword";
// import Header from "./components/home/Header";
// import Footer from "./components/layout/Footer";
// import Dashboard from "./components/pages/Dashbord";
// import UserCreateForm from "./components/pages/CreateOrEditProfile";
// import EditProfile from "./components/profile/UserCreateForm"; // 👈 Ensure correct path

// export default function App() {
//   return (
//     <>
//       <div className="flex flex-col min-h-screen">
//         {/* 🔹 Common Header */}
//         <Header />

//         {/* 🔹 Main Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />

//             {/* Protected/User Routes */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/create-profile" element={<UserCreateForm />} />
//             {/* ✅ Corrected route below */}
//             <Route path="/profile/edit" element={<EditProfile />} />
//             {/* Optional duplicate route (for backward support) */}
//             <Route path="/edit-profile" element={<EditProfile />} />
//           </Routes>
//         </main>

//         {/* 🔹 Common Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }













