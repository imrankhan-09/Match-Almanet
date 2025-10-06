/* src/pages/ProfilePage.jsx */
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import storageApi from '../lib/storageApi'


export default function ProfilePage() {
const { user } = useAuth()
const email = user?.email
const [editing, setEditing] = useState(false)
const [saving, setSaving] = useState(false)
const [profile, setProfile] = useState({ name: '', email: '', age: '', city: '', bio: '' })


useEffect(() => {
if (!email) return
const p = storageApi.getProfile(email)
if (p) setProfile(p)
else setEditing(true)
}, [email])


function onChange(e) {
const { name, value } = e.target
setProfile(prev => ({ ...prev, [name]: value }))
}


async function save(e) {
e?.preventDefault?.()
setSaving(true)
storageApi.saveProfile(email, profile)
await new Promise(r => setTimeout(r, 250))
setSaving(false)
setEditing(false)
}

return (
  <div className="min-h-screen bg-gray-50">
<div className="max-w-4xl mx-auto px-6 py-12">
<div className="flex items-start justify-between mb-4">
<h2 className="text-2xl font-semibold">Your Profile</h2>
</div>

<div className="bg-white p-6 rounded shadow">
{!editing ? (
<>
<div className="mb-4">
<div className="text-sm text-gray-500">Name</div>
<div className="font-medium">{profile.name || '—'}</div>
</div>
<div className="mb-4">
<div className="text-sm text-gray-500">Email</div>
<div className="font-medium">{profile.email || email}</div>
</div>


<div className="mb-4">
<div className="text-sm text-gray-500">Age</div>
<div className="font-medium">{profile.age || '—'}</div>
</div>


<div className="mb-4">
<div className="text-sm text-gray-500">City</div>
<div className="font-medium">{profile.city || '—'}</div>
</div>


<div className="mb-4">
<div className="text-sm text-gray-500">Bio</div>
<div className="font-medium">{profile.bio || '—'}</div>
</div>


<div className="flex gap-2">
<button onClick={() => setEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded">{profile.name ? 'Edit Profile' : 'Create Profile'}</button>
</div>

</>
) : (
<form onSubmit={save} className="space-y-4">
<div>
<label className="text-sm text-gray-600">Name</label>
<input name="name" value={profile.name} onChange={onChange} className="block w-full mt-1 p-2 border rounded" required />
</div>


<div>
<label className="text-sm text-gray-600">Email</label>
<input name="email" value={profile.email || email} onChange={onChange} className="block w-full mt-1 p-2 border rounded bg-gray-50" readOnly />
</div>


<div>
<label className="text-sm text-gray-600">Age</label>
<input name="age" value={profile.age} onChange={onChange} className="block w-full mt-1 p-2 border rounded" />
</div>


<div>
<label className="text-sm text-gray-600">City</label>
<input name="city" value={profile.city} onChange={onChange} className="block w-full mt-1 p-2 border rounded" />
</div>


<div>
<label className="text-sm text-gray-600">Bio</label>
<textarea name="bio" value={profile.bio} onChange={onChange} className="block w-full mt-1 p-2 border rounded" rows={4} />
</div>

<div className="flex gap-2">
<button type="submit" disabled={saving} className="px-4 py-2 bg-green-600 text-white rounded">{saving ? 'Saving…' : 'Save'}</button>
<button type="button" onClick={() => { const p = storageApi.getProfile(email); setProfile(p || { name:'', email, age:'', city:'', bio:'' }); setEditing(false) }} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
</div>
</form>
)}
</div>
</div>
</div>
)
}