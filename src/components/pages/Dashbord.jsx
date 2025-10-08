import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../context/UserProfileContext";

export default function Dashboard() {
  const { profile } = useUserProfile();
  const navigate = useNavigate();

  if (!profile) return <p>Loading profile...</p>;

  return (
    
    <div className="max-w-2xl mx-auto p-6 mt-6 bg-white shadow rounded-lg">
      <h2 className="text-center p-2 text-bold">Your Profile</h2>
      {profile.profilePhoto && (
        <img src={profile.profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4" />
      )}

      <h2 className="text-xl font-bold mb-2">{profile.fullName}</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Profession:</strong> {profile.profession}</p>
      <p><strong>About:</strong> {profile.about}</p>
      <p><strong>Skills:</strong> {profile.skills}</p>

      <button
        onClick={() => navigate("/profile/edit")}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Edit Profile
      </button>
    </div>
  );
}




















// /* src/pages/Dashboard.jsx */
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserProfile } from "../context/UserProfileContext";

// export default function Dashboard() {
//   const { profile } = useUserProfile(); // context se profile fetch
//   const navigate = useNavigate();

//   const handleCreateOrEdit = () => {
//     if (profile) {
//       navigate("/edit-profile"); // profile exist → edit
//     } else {
//       navigate("/create-profile"); // profile not exist → create
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

//       {!profile ? (
//         <div className="text-center">
//           <p className="mb-4">You have not created your profile yet.</p>
//           <button
//             onClick={handleCreateOrEdit}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Create Profile
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {Object.keys(profile).map((key) => (
//             <div key={key}>
//               <strong className="capitalize">{key.replace(/([A-Z])/g, " $1")}: </strong>
//               <span>{profile[key]}</span>
//             </div>
//           ))}
//           <div className="text-center mt-6">
//             <button
//               onClick={handleCreateOrEdit}
//               className="px-4 py-2 bg-green-500 text-white rounded"
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserProfile } from "../context/UserProfileContext";

// export default function Dashboard() {
//   const { profile } = useUserProfile();
//   const navigate = useNavigate();

//   if (!profile)
//     return (
//       <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded text-center">
//         <p>You have not created your profile yet.</p>
//         <button
//           onClick={() => navigate("/create-profile")}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Create Profile
//         </button>
//       </div>
//     );

//   return (
//     <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="space-y-2">
//         {Object.keys(profile).map((key) => (
//           <div key={key}>
//             <strong className="capitalize">{key.replace(/([A-Z])/g, " $1")}: </strong>
//             <span>{profile[key]}</span>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => navigate("/edit-profile")}
//         className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
//       >
//         Edit Profile
//       </button>
//     </div>
//   );
// }
