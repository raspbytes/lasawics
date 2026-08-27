import Layout from "./components/Layout"
import wicsLogo from "./assets/logowics.png"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useRef } from "react"

import About from "./pages/About"

function Home(){
  const eventsSectionRef = useRef(null)
  const scrollToEvents = () => {
    eventsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout>
      {/* {children} space gets filled here */}
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row py-8">

      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-wics-dark bg-wics-bpink px-2.5 py-1 rounded-md">
          Welcome to LASA WiCS+
        </span>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          <span class="transition-all duration-300 hover:text-wics-pink cursor-default">Build,</span> 
          <span class="transition-all duration-300 hover:text-blue-600 cursor-default">Learn,</span> 
          <span class="transition-all duration-300 hover:text-wics-magenta cursor-default">Connect.</span>
        </h1>

        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          We are a student-led community dedicated to supporting women and underrepresented individuals in computer science one step at a time. We offer workshops, projects, presentations, and host many events throughout the year with the goal of making CS as accessible as we can.
        </p>
        
        <div className="mt-8 flex gap-4">
          <button onClick={scrollToEvents}
                className="bg-[#0b132b] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-indigo-900/30 active:scale-95"className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800">
            Explore Events
          </button>
          <button className="rounded-xl border border-slate-200 bg-slate px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-wics-bpink">
            Learn More
          </button>
        </div>
      </div>

      <div className="order-first md:order-last w-64 h-64 sm:w-80 sm:h-80 shrink-0">
        <img 
            src={wicsLogo} 
            alt="LASA WiCS Logo" 
            className="transition-all duration-300 hover:scale-105 hover:rotate-6 hover:drop-shadow-[4px_4px_0px_#faccdf] hover:drop-shadow-[-4px_-4px_0px_#c8de51] cursor-pointer"
          />
      </div>
      </div>

       <section 
       ref={eventsSectionRef} 
       id="events" 
       className="w-full bg-slate-50/50 py-16 px-6 sm:px-12 flex flex-col items-center"
       >

        <div className="max-w-6xl w-full">
          
          {/* Section Sub-Heading */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
            <p className="text-slate-500 mt-2">Join our latest workshops and all-open programs.</p>
          </div>

          
          {/* layout container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Glassmorphic thing EC 1 */}
            <div className="relative group overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-pink-200">
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl">
                In 2 weeks
              </div>
              <span className="text-xs font-semibold text-pink-600 tracking-wide uppercase">All-open Meeting</span>
              <h3 className="text-lg font-bold text-slate-800 mt-2 leading-snug">Welcome to LASA WiCS!</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">First meeting of the year, get to know captains, commitments, and a general overview of the club.</p>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium">9/2 • Rm. 505 Lunch </span>
                <span className="text-xs font-bold text-slate-700 group-hover:text-pink-600 transition-colors flex items-center gap-1 cursor-pointer">
                  Slide Deck <span>→</span>
                </span>
              </div>
            </div>

            {/* Glassmorphic thing EC 2 */}
           <div className="relative group overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl">
                In 4 Weeks
              </div>
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Basics</span>
              <h3 className="text-lg font-bold text-slate-800 mt-2 leading-snug">Intro to Programming</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">Crash course on the fundamentals of programming, IDEs, and debugging + details on leaderboard/membership</p>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium">9/9 • Rm. 505 Lunch</span>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer">
                  Slide Deck <span>→</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
