import Layout from "./components/Layout"
import wicsLogo from "./assets/logowics.png"

export default function App() {
  return (
    <Layout>
      {/* {children} space gets filled here */}
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row py-8">

      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-wics-dark bg-wics-bpink px-2.5 py-1 rounded-md">
          Welcome to LASA WiCS+
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Build, Learn, Connect.
        </h1>
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          We are a student-led community dedicated to supporting women and underrepresented individuals in computer science one step at a time. We offer workshops, projects, presentations, and host many events throughout the year with the goal of making CS as accessible as we can.
        </p>
        
        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800">
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
            className="w-full h-full object-contain drop-shadow-xl animate-fade-in"
          />
      </div>
      </div>
    </Layout>
  )
}
