import Layout from "../components/Layout"

export default function MembersHub() {
  return (
    <Layout>
      <div className="max-w-4xl animate-fade-in">
        <span className="text-xs font-bold uppercase tracking-widest text-wics-magenta bg-wics-magenta/10 px-2.5 py-1 rounded-md">
          🔒 Secure Area
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-wics-dark">
          Members Hub
        </h1>
        <p className="mt-2 text-slate-500">
          Welcome to the hidden control panel. Access leaderboard statistics, upcoming slide decks, and officer contact channels below.
        </p>

        {/* Placeholder for future leaderboard & galleries */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-slate-800">Leaderboard Rankings</h3>
            <p className="text-sm text-slate-400 mt-1">Points system updates incoming.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-slate-800">Club Gallery</h3>
            <p className="text-sm text-slate-400 mt-1">Photos from workshops and project builds.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
