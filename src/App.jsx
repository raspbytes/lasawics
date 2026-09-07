import { BrowserRouter, Routes, Route, Link } from "react-router-dom" 
import { useRef } from "react" 
import Layout from "./components/Layout" 
import wicsLogo from "./assets/logowics.png" 
import About from "./pages/About" 
import PasswordGate from "./pages/PasswordGate" 
import MembersHub from "./pages/MembersHub" 
import Sponsors from "./pages/Sponsors" 
import Contact from "./pages/Contact" 

function Home() { 
  const eventsSectionRef = useRef(null) 
  const scrollToEvents = () => { 
    eventsSectionRef.current?.scrollIntoView({ behavior: "smooth" }) 
  } 

  return ( 
    <Layout> 
      
      {/* ─── 1. HERO REGION CONTAINER (Text & Logo only) ─── */}
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row py-8"> 
        <div className="max-w-2xl"> 
          <span className="text-xs font-bold uppercase tracking-widest text-wics-dark bg-wics-pink/10 px-2.5 py-1 rounded-md"> 
            Welcome to LASA WiCS+ 
          </span> 
          
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"> 
            <span className="transition-all duration-300 hover:text-wics-pink cursor-default">Build,</span>{" "}
            <span className="transition-all duration-300 hover:text-blue-600 cursor-default">Learn,</span>{" "}
            <span className="transition-all duration-300 hover:text-wics-magenta cursor-default">Connect.</span> 
          </h1> 
          
          <p className="mt-4 text-lg text-slate-500 leading-relaxed"> 
            We are a student-led community dedicated to supporting women and underrepresented individuals in computer science one step at a time. We offer workshops, projects, presentations, and host many events throughout the year with the goal of making CS as accessible as we can. 
          </p> 
          
          <div className="mt-8 flex gap-4"> 
            <button 
              onClick={scrollToEvents} 
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-900/10 active:scale-95"
            > 
              Explore Events 
            </button> 
            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-wics-pink/10 hover:text-wics-pink hover:border-wics-pink/20"> 
              Learn More 
            </button> 
          </div> 
        </div> 

        <div className="order-first md:order-last w-64 h-64 sm:w-80 sm:h-80 shrink-0"> 

          <img 
            src={wicsLogo} 
            alt="LASA WiCS Logo" 
            className="w-full h-full object-contain drop-shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-6 cursor-pointer" 
          /> 
        </div> 
      </div> 

      {/* ─── 2. STATS IMPACT BANNER BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-wics-dark text-white p-8 rounded-3xl my-16 text-center shadow-lg"> 
        <div className="transition-transform duration-300 hover:scale-105"> 
          <p className="text-3xl font-black text-wics-lime">...</p> 
          <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Active Members</p> 
        </div> 
        <div className="transition-transform duration-300 hover:scale-105"> 
          <p className="text-3xl font-black text-wics-pink">12+</p> 
          <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Annual Workshops</p> 
        </div> 
        <div className="transition-transform duration-300 hover:scale-105"> 
          <p className="text-3xl font-black text-wics-magenta">4</p> 
          <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Annual Events</p> 
        </div> 
        <div className="transition-transform duration-300 hover:scale-105"> 
          <p className="text-3xl font-black text-white">100%</p> 
          <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Student Led</p> 
        </div> 
      </div> 

      {/* ─── 3. UPCOMING EVENTS TIMELINE ─── */}
      <section ref={eventsSectionRef} id="events" className="w-full bg-slate-50/50 py-16 px-6 sm:px-12 flex flex-col items-center rounded-3xl mt-12 border border-slate-100"> 
        <div className="max-w-6xl w-full"> 
          <div className="mb-10 text-center md:text-left"> 
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2> 
            <p className="text-slate-500 mt-2">Join our latest workshops and all-open programs.</p> 
          </div> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {/* Card 1 */} 
            <div className="relative group overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-pink-200"> 
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl"> In 1 week </div> 
              <span className="text-xs font-semibold text-pink-600 tracking-wide uppercase">All-open Meeting</span> 
              <h3 className="text-lg font-bold text-slate-800 mt-2 leading-snug">Welcome to LASA WiCS!</h3> 
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">First meeting of the year, get to know captains, commitments, and a general overview of the club.</p> 
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100"> 
                <span className="text-xs text-slate-400 font-medium">9/14 • Rm. 505 Lunch </span> 
                <span className="text-xs font-bold text-slate-700 group-hover:text-pink-600 transition-colors flex items-center gap-1 cursor-pointer"> Slide Deck <span>→</span> </span> 
              </div> 
            </div> 

            {/* Card 2 */} 
            <div className="relative group overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200"> 
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl"> In 4 Weeks </div> 
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Basics</span> 
              <h3 className="text-lg font-bold text-slate-800 mt-2 leading-snug">Intro to Programming</h3> 
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">Crash course on the fundamentals of programming, IDEs, and debugging + details on leaderboard/membership</p> 
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100"> 
                <span className="text-xs text-slate-400 font-medium">9/28 • Rm. 505 Lunch</span> 
                <Link to="/members" className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"> 
                  Visit the Members Hub! <span>→</span> 
                </Link> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

     <section className="w-full max-w-4xl mx-auto my-24 px-6 animate-fade-in">
  {/* SECTION HEADING */}
  <div className="text-center max-w-xl mx-auto mb-10">
    <span className="text-[10px] font-bold uppercase tracking-widest text-wics-magenta bg-wics-magenta/10 px-2.5 py-1 rounded-md font-mono">
      // knowledge_base
    </span>
    <h2 className="text-3xl font-black text-wics-dark mt-3">Frequently Asked Questions</h2>
  </div>
  
  {/* ACCORDION CONTAINER */}
  <div className="space-y-4">
    
    {/* FAQ ITEM 1 */}
    <details className="group overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-wics-pink/30 [&_summary::-webkit-details-marker]:hidden">
      {/* Question Header Line (Background transitions subtly when opened!) */}
      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer select-none list-none transition-colors duration-300 group-open:bg-slate-50/60">
        <span>Do I need coding experience to join?</span>
        {/* Neon Pink Indicator: Rotates from 0 to 90 degrees when opened */}
        <span className="text-wics-pink font-mono text-sm transition-transform duration-300 transform group-open:rotate-90">
          ▶
        </span>
      </summary>
      {/* Answer Body text (Smooth fading entrance animation) */}
      <div className="px-5 pb-5 pt-2 border-t border-slate-100/60 bg-white text-sm text-slate-500 leading-relaxed animate-fade-in">
        Nope! We specialize in introductory crash courses. We guide our members through the fundamentals step-by-step.
      </div>
    </details>

    {/* FAQ ITEM 2 */}
    <details className="group overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200/40 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer select-none list-none transition-colors duration-300 group-open:bg-slate-50/60">
        <span>When and where are the meetings?</span>
        <span className="text-wics-magenta font-mono text-sm transition-transform duration-300 transform group-open:rotate-90">
          ▶
        </span>
      </summary>
      <div className="px-5 pb-5 pt-2 border-t border-slate-100/60 bg-white text-sm text-slate-500 leading-relaxed animate-fade-in">
        We meet during lunch in Room 505. Check out our upcoming events card grid for the exact presentation dates!
      </div>
    </details>

    {/* FAQ ITEM 3 */}
    <details className="group overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200/40 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer select-none list-none transition-colors duration-300 group-open:bg-slate-50/60">
        <span>What kinds of domains does WiCS work with?</span>
        <span className="text-wics-magenta font-mono text-sm transition-transform duration-300 transform group-open:rotate-90">
          ▶
        </span>
      </summary>
      <div className="px-5 pb-5 pt-2 border-t border-slate-100/60 bg-white text-sm text-slate-500 leading-relaxed animate-fade-in">
        Throughout the year, we aim to pilot a new initiative known as BUILD. There will be 5 tracks covered by different captains going over Basics of programming, User-centric design, Interdisciplinary CS, Logic and CP Algorithms, and finally, Discussing new technologies. All tracks will be supplemented with corresponding events or projects, and aim to give members a rounded view of the vast world of Computer Science. We'll also take member requests sporadically throughout the year.
      </div>
    </details>

    {/* FAQ ITEM 4 */}
    <details className="group overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200/40 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer select-none list-none transition-colors duration-300 group-open:bg-slate-50/60">
        <span>What is the member hub?</span>
        <span className="text-wics-magenta font-mono text-sm transition-transform duration-300 transform group-open:rotate-90">
          ▶
        </span>
      </summary>
      <div className="px-5 pb-5 pt-2 border-t border-slate-100/60 bg-white text-sm text-slate-500 leading-relaxed animate-fade-in">
       The member hub located at the top right of this page is a centralized portal designed for registered members to access internal club assets such as resources, leaderboards, calendard, and blog/gallery posts. The password will be given at the first annual meeting.
      </div>
    </details>

    {/* FAQ ITEM 5 */}
    <details className="group overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200/40 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between p-5 font-bold text-slate-800 cursor-pointer select-none list-none transition-colors duration-300 group-open:bg-slate-50/60">
        <span>How much time or cost commitment does this take?</span>
        <span className="text-wics-magenta font-mono text-sm transition-transform duration-300 transform group-open:rotate-90">
          ▶
        </span>
      </summary>
      <div className="px-5 pb-5 pt-2 border-t border-slate-100/60 bg-white text-sm text-slate-500 leading-relaxed animate-fade-in">
       The club is designed to be a landing spot and safe community for students of all backgrounds to explore CS. While we primarily meet weekly during lunch, we'll host other events throughout the year that are optional and meant as a fun way to supplement your learning. Participation in these events will be rewarded with points on our club leaderboard, which can lead to certain perks, though attendance at out-of-school events are never mandatory for being a member. There are no club fees or dues, and all materials, workshops, and events are fully free and open-source.
      </div>
    </details>

  </div>
</section>

    </Layout> 
  ) 
} 

export default function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/members" element={<PasswordGate />} /> 
        <Route path="/sponsors" element={<Sponsors />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </BrowserRouter> 
  ) 
}
