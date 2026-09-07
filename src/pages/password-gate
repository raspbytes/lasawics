import { useState } from "react"
import Layout from "../components/Layout"
import MembersHub from "./MembersHub"

export default function PasswordGate() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)

  // 🔒 Define your secret club password here
  const CLUB_PASSWORD = "lasawicspassword" 

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === CLUB_PASSWORD) {
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword("") // Wipe input box if incorrect
    }
  }

  // 🔓 If password is correct, bypass the form and display the portal!
  if (isAuthenticated) {
    return <MembersHub />
  }

  return (
    <Layout>
      <div className="mx-auto mt-12 max-w-md bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xl shadow-slate-100 flex flex-col items-center text-center animate-fade-in">
        <div className="w-12 h-12 bg-wics-pink/10 text-wics-pink rounded-2xl flex items-center justify-center text-xl font-bold">
          🔒
        </div>
        
        <h2 className="mt-4 text-2xl font-black text-wics-dark">Members Portal</h2>
        <p className="text-sm text-slate-400 mt-1 px-4">
          Enter the current chapter password to unlock internal club assets.
        </p>

        <form onSubmit={handleSubmit} className="w-full mt-6 flex flex-col gap-3">
          <input 
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 font-medium text-center focus:outline-none transition-all ${
              error 
                ? "border-red-400 focus:border-red-500 shadow-sm shadow-red-50" 
                : "border-slate-200 focus:border-wics-pink focus:bg-white"
            }`}
          />

          {error && (
            <p className="text-xs font-semibold text-red-500 animate-pulse">
              Incorrect password. Try again!
            </p>
          )}

          <button 
            type="submit"
            className="w-full mt-2 rounded-xl bg-wics-dark text-white font-bold py-3 transition-all hover:bg-wics-pink hover:shadow-lg hover:shadow-wics-pink/10 active:scale-95"
          >
            Unlock Hub
          </button>
        </form>
      </div>
    </Layout>
  )
}
