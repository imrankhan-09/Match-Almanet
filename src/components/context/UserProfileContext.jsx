import React, { createContext, useContext, useState, useEffect } from "react";

const UserProfileContext = createContext();

export const useUserProfile = () => useContext(UserProfileContext);

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const updateProfile = (data) => {
    setProfile(data);
    localStorage.setItem("userProfile", JSON.stringify(data));
  };

  return (
    <UserProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};











// import React, { createContext, useContext, useState, useEffect } from "react";

// const UserProfileContext = createContext();

// const STORAGE_KEY = "userProfile";

// export function UserProfileProvider({ children }) {
//   const [profile, setProfile] = useState(null);

//   // Load from localStorage on mount
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem(STORAGE_KEY);
//       if (raw) setProfile(JSON.parse(raw));
//     } catch (err) {
//       console.error("Error reading profile:", err);
//     }
//   }, []);

//   // Save to localStorage whenever profile changes
//   const updateProfile = (data) => {
//     setProfile(data);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//   };

//   return (
//     <UserProfileContext.Provider value={{ profile, updateProfile }}>
//       {children}
//     </UserProfileContext.Provider>
//   );
// }

// export function useUserProfile() {
//   return useContext(UserProfileContext);
// }










// import React, { createContext, useContext, useState, useEffect } from "react";

// const UserProfileContext = createContext();

// export const useUserProfile = () => useContext(UserProfileContext);

// const initialData = {
//   fullName: "",
//   age: "",
//   gender: "",
//   maritalStatus: "",
//   address: "",
//   email: "",
//   profession: "",
//   company: "",
//   experience: "",
//   skills: "",
// };

// export const UserProfileProvider = ({ children }) => {
//   const [profile, setProfile] = useState(() => {
//     const saved = localStorage.getItem("userProfile");
//     return saved ? JSON.parse(saved) : null;
//   });

//   useEffect(() => {
//     if (profile) localStorage.setItem("userProfile", JSON.stringify(profile));
//   }, [profile]);

//   const updateProfile = (data) => {
//     setProfile(data);
//   };

//   return (
//     <UserProfileContext.Provider value={{ profile, updateProfile }}>
//       {children}
//     </UserProfileContext.Provider>
//   );
// };
