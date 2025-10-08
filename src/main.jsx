/* src/main.jsx */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthProvider.jsx";
import "./index.css";
import { UserProfileProvider } from "./components/context/UserProfileContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <UserProfileProvider>
        <App />
      </UserProfileProvider>
    </BrowserRouter>
  </AuthProvider>
);




// /* src/main.jsx */
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./components/context/AuthProvider.jsx";
// import "./index.css";
// import { UserProfileProvider } from "./components/context/UserProfileContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     <BrowserRouter>
//      <UserProfileProvider>
//       <App />
//     </BrowserRouter>
//     <UserProfileProvider/>
//   </AuthProvider>
// );


// import { AuthProvider } from "./components/context/AuthProvider.jsx";
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import "./App.css";


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </BrowserRouter>
//    </StrictMode>,
// )
