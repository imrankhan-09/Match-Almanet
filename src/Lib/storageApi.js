/* src/lib/storageApi.js */
// Abstraction layer: currently localStorage-based. Later replace with axios calls to your Node API.
const USERS_KEY = 'mm_users'
const PROFILES_KEY = 'mm_profiles'
const SESSION_KEY = 'mm_session_email'


function readJSON(key, fallback = {}) {
try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback }
catch { return fallback }
}
function writeJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)) }

export default {
// session helpers
getSession() {
const email = localStorage.getItem(SESSION_KEY)
if (!email) return null
// return minimal user object; in future this can include token
return { email }
},
logout() { localStorage.removeItem(SESSION_KEY) },


// auth
register(email, password) {
const users = readJSON(USERS_KEY, {})
if (users[email]) throw new Error('User exists')
users[email] = { password }
writeJSON(USERS_KEY, users)
localStorage.setItem(SESSION_KEY, email)
return { email }
},
login(email, password) {
const users = readJSON(USERS_KEY, {})
const u = users[email]
if (!u) throw new Error('No user found')
if (u.password !== password) throw new Error('Invalid password')
localStorage.setItem(SESSION_KEY, email)
return { email }
},


// profile
getProfile(email) {
const profiles = readJSON(PROFILES_KEY, {})
return profiles[email] || null
},
saveProfile(email, profile) {
const profiles = readJSON(PROFILES_KEY, {})
profiles[email] = { ...profile, email }
writeJSON(PROFILES_KEY, profiles)
return profiles[email]
}
}