import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-wics-pink/20"> 
      
      {/* ─── FIXED NAVBAR WRAPPER ─── */} 
      <nav className="sticky top-0 z-50 border-b border-wics-light bg-white/90 backdrop-blur-md"> 
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 gap-4"> 
          
          {/* 1. BRAND LOGO (Left Side) */}
          <div className="shrink-0"> 
            <Link to="/" className="text-xl font-extrabold tracking-tight text-wics-dark hover:text-wics-pink transition-colors">
              LASA WiCS+
            </Link> 
          </div> 
          
          {/* 2. REVISED NAVBAR LINKS (Center - Only the public-facing ones you kept!) */}
          <div className="hidden items-center gap-6 md:flex font-medium text-sm text-wics-dark/80"> 
            <Link to="/" className="transition-colors hover:text-wics-pink">Home</Link> 
            <Link to="/about" className="transition-colors hover:text-wics-pink">About</Link> 
            <Link to="/sponsors" className="transition-colors hover:text-wics-pink">Sponsors</Link> 
            <Link to="/contact" className="transition-colors hover:text-wics-pink">Get in Touch</Link> 
          </div> 
          
          {/* 3. MEMBER ENTRY ACTION BUTTON (Right Side) */}
          <div className="shrink-0">
            <Link to="/members"> 
              <button className="rounded-full bg-wics-dark px-5 py-2 text-sm font-bold text-white transition-all hover:bg-wics-pink active:scale-95 shadow-sm"> 
                members hub 
              </button> 
            </Link> 
          </div>

        </div> 
      </nav>

      {/* ─── CANVAS MAIN BODY CONTAINER ─── */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {children}
      </main>

      {/* ─── FOOTER SHELL ─── */}
      <footer className="border-t border-purple-100 bg-white py-6 mt-auto text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} LASA WiCS+
      </footer>

    </div>
  )
}
