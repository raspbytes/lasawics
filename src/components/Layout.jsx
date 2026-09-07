import { Link } from "react-router-dom" // Fixed: Added missing router link import

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-wics-pink/20"> 
      
      {/* NAVBAR */} 
      <nav className="sticky top-0 z-50 border-b border-wics-light bg-white/80 backdrop-blur-md"> 
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"> 
          
          <div className="flex items-center gap-2"> 
            <span className="text-xl font-extrabold tracking-tight text-wics-dark">LASA WiCS+</span> 
          </div> 
          
          <div className="hidden items-center gap-8 md:flex"> 
            <Link to="/" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Home</Link> 
            <a href="#" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Resources</a> 
            <Link to="/about" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">About</Link> 
            <a href="#" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Calendar</a> 
            <a href="#" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Leaderboard</a> 
            <a href="#" className="text-sm font-medium text-wics-dark/80 transition-colors hover:text-wics-pink">Sponsors</a> 
          </div> 
          
          {/* Fixed: Cleaned up the broken nested loops and tags around the layout button row */}
          <Link to="/members"> 
            <button className="rounded-full bg-wics-dark px-5 py-2 text-sm font-bold text-white transition-all hover:bg-wics-pink active:scale-95"> 
              members hub 
            </button> 
          </Link> 

        </div> 
      </nav>

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
