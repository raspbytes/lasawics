import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Layout from "../components/Layout"
import Terminal from "../components/Terminal"
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

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-wics-pink bg-wics-pink/10 px-2.5 py-1 rounded-md">
          Our Mission
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-wics-dark">
          About LASA WiCS+
        </h1>
        <p className="mt-6 text-lg text-slate-500 leading-relaxed">
          Founded by students, our chapter aims to patch the gender gap in technology. We provide a collaborative safe space for students to experiment with code, build portfolio projects, and connect with industry mentors.
        </p>

         <div className="mt-10 w-full max-w-2xl drop-shadow-xl">
          <Terminal />
        </div>

      </div>
    </Layout>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
