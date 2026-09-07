import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-wics-pink/20"> 
      
      {/* ─── ULTRA-BULLETPROOF NAVBAR ─── */} 
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm"> 
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"> 
          
          {/* Left Side: Logo */}
          <div className="shrink-0"> 
            <Link to="/" className="text-lg font-black tracking-tight text-wics-dark hover:text-wics-pink transition-colors sm:text-xl">
              LASA WiCS+
            </Link> 
          </div> 
          
          {/* Center: The 4 Public Links (No hidden classes so they stay in one flat line!) */}
          <div className="flex items-center gap-3 sm:gap-6 font-semibold text-xs sm:text-sm text-wics-dark/80"> 
            <Link to="/" className="transition-colors hover:text-wics-pink">Home</Link> 
            <Link to="/about" className="transition-colors hover:text-wics-pink">About</Link> 
            <Link to="/sponsors" className="transition-colors hover:text-wics-pink">Sponsors</Link> 
            <Link to="/contact" className="transition-colors hover:text-wics-pink">Contact</Link> 
          </div> 
          
          {/* Right Side: Secure Entry Button */}
          <div className="shrink-0">
            <Link to="/members"> 
              <button className="rounded-full bg-wics-dark px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:bg-wics-pink active:scale-95 shadow-sm whitespace-nowrap"> 
                members hub 
              </button> 
            </Link> 
          </div>

        </div> 
      </nav>

      {/* ─── MAIN TEXT CANVAS CONTAINER ─── */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {children}
      </main>

      {/* ─── FOOTER SHELL ─── */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} LASA WiCS+
      </footer>

    </div>
  )
}
