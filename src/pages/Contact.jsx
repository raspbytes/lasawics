import { useState } from "react"
import Layout from "../components/Layout"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "Student", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, this cleanly mimics a submission trigger!
    setSubmitted(true)
    setFormData({ name: "", email: "", role: "Student", message: "" })
  }

  return (
    <Layout>
      <div className="mx-auto max-w-5xl animate-fade-in py-4">
        
        {/* TOP TITLE HEADER */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-wics-pink bg-wics-pink/10 px-2.5 py-1 rounded-md">
            Outreach Form
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-wics-dark sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-xl">
            Have questions about potential collaborations or outreach opportunities? Drop us a message through or form, or reach out otherwise. Our leadership team will get back to you ASAP!
          </p>
        </div>

        {/* MAIN 2-COLUMN SPLIT CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-8">
          
          {/* COLUMN 1: QUICK INFO PANEL (Spans 5 Columns on Desktop) */}
          <div className="md:col-span-5 space-y-8 bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-wics-lime">Direct Connect</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Skip the form entirely if you prefer another method of contact.
              </p>
            </div>

            <div className="space-y-4 font-medium text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-lg">✎</span>
                <a href="mailto:lasawics@gmail.com" className="hover:text-wics-pink transition-colors">
                  lasawics@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">⌖</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-wics-magenta transition-colors">
                  @lasawics
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">⚲</span>
                <span>LASA High School • Rm. 505</span>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 mt-6">
              <p className="text-xs text-wics-magenta font-mono tracking-wider uppercase">
                // Response Time
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We monitor our inboxes actively during the academic school year. Expect a reply within around 24-48 working hours!
              </p>
            </div>
          </div>

          {/* COLUMN 2: THE INTERACTIVE FORM (Spans 7 Columns on Desktop) */}
          <div className="md:col-span-7 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xl shadow-slate-100/50">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center animate-fade-in">
                <span className="text-4xl">˗ˏˋ ꒰ ✉︎ ꒱ ˎˊ˗</span>
                <h3 className="text-2xl font-black text-wics-dark mt-4">Message Sent!</h3>
                <p className="text-sm text-slate-400 mt-2 max-w-sm">
                  Thank you for reaching out. Your entry has been succesfully submitted, and we will get back to you ASAP.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-bold text-wics-pink hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* NAME FIELD */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wics-dark/60 mb-2">Your Name</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Amazing WiCS Contributor"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-wics-pink bg-slate-50/50 transition-all font-medium"
                  />
                </div>

                {/* EMAIL FIELD */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wics-dark/60 mb-2">Email Address</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="supercoolperson@example.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-wics-pink bg-slate-50/50 transition-all font-medium"
                  />
                </div>

                {/* INTERACTIVE ROLE SELECTOR BADGES */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wics-dark/60 mb-2">I am a...</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Student", "Sponsor", "Other"].map((role) => (
                      <button
                        type="button"
                        key={role}
                        onClick={() => setFormData({...formData, role})}
                        className={`py-2 px-3 text-xs font-bold rounded-xl transition-all border ${
                          formData.role === role
                            ? "bg-wics-dark text-white border-wics-dark shadow-md"
                            : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE BODY FIELD */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wics-dark/60 mb-2">Your Message</label>
                  <textarea 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-wics-pink bg-slate-50/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button 
                  type="submit"
                  className="w-full bg-wics-dark text-white font-bold py-3.5 rounded-xl transition-all hover:bg-wics-pink hover:shadow-lg hover:shadow-wics-pink/10 active:scale-95 shadow-md mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </Layout>
  )
}
