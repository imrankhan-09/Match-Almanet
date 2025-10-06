/* src/pages/Register.jsx */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'


export default function Register() {
const { register } = useAuth()
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [err, setErr] = useState('')


async function submit(e) {
e.preventDefault()
setErr('')
try {
await register(email, password)
navigate('/profile')
} catch (err) {
setErr(err.message || 'Register failed')
}
}


return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
<div className="max-w-md w-full bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Register</h2>
{err && <div className="mb-3 text-sm text-red-700 bg-red-50 p-2 rounded">{err}</div>}
<form onSubmit={submit} className="space-y-3">
<div>
<label className="text-sm text-gray-600">Email</label>
<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full mt-1 p-2 border rounded" required />
</div>
<div>
<label className="text-sm text-gray-600">Password</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-full mt-1 p-2 border rounded" required />
</div>
<div className="flex gap-2">
<button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Register</button>
</div>
</form>
</div>
</div>
)
}

















































// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthProvider.jsx";

// export default function Register() {
//   const { register } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [busy, setBusy] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setBusy(true);
//     try {
//       await register(name, email, password);
//     } catch (err) {
//       setError(err.message || "Registration failed");
//     } finally {
//       setBusy(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Register
//         </h2>

//         {error && (
//           <div className="mb-4 text-center text-red-600 text-sm">{error}</div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={busy}
//             className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg shadow-md font-medium"
//           >
//             {busy ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
