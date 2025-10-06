
// import React from "react";

// import { StrictMode } from 'react';

// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App.jsx";
// import { AuthProvider } from "./components/context/AuthProvider.jsx";
// import "./index.css";
// import "./app.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import { AuthProvider } from "./components/context/AuthProvider.jsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./app.css";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
   </StrictMode>,
)
