import { Link } from "react-router-dom"
if (typeof window !== 'undefined') {
  const errorHandler = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    if (message && message.includes('ResizeObserver loop')) {
      return true; // Prevents the error overlay from popping up
    }
    if (errorHandler) return errorHandler(message, source, lineno, colno, error);
  };

  window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('ResizeObserver loop')) {
      e.stopImmediatePropagation();
    }
  });
}

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-lime-200">
      
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

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE8BkX6xExl37-vPL1IEqQUA4k8uf9E4WQMLviwjJcFRBAPQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-wics-dark px-4 py-2 text-sm font-semibold text-wics-light transition-all hover:bg-wics-pink active:scale-95 shadow-sm shadow-wics-light">
              Join Club
            </button>
          </a>

        </div>
      </nav>

     {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-purple-100 bg-white py-8 mt-auto">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} LASA Women in Computer Science. All rights reserved.
            This website is currently maintained by Sarah Shafi.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
