import { Link } from "react-router-dom" // Fixed: Added missing router link import

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-wics-pink/20"> 
      
      {/* NAVBAR */} 
      <div className="hidden items-center gap-8 md:flex"> 
  <Link to="/" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Home</Link> 
  
  {/* Changed href="#" to href="/resources" or keep them as standard placeholders without snap actions */}
  <Link to="/resources" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Resources</Link> 
  <Link to="/about" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">About</Link> 
  
  <Link to="/calendar" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Calendar</Link> 
  <Link to="/leaderboard" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Leaderboard</Link> 
  <Link to="/sponsors" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Sponsors</Link> 
</div> 

{/* SECURE ENTRY POINT */}
<Link to="/members"> 
  <button className="rounded-full bg-wics-dark px-5 py-2 text-sm font-bold text-white transition-all hover:bg-wics-pink active:scale-95"> 
    members hub 
  </button> 
</Link> 


      {/* CANVAS MAIN BODY CONTAINER */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {children}
      </main>

      {/* FOOTER SHELL */}
      <footer className="border-t border-purple-100 bg-white py-6 mt-auto text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} LASA WiCS+
      </footer>

    </div>
  )
}
