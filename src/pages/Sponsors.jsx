import Layout from "../components/Layout"

export default function Sponsors() {
  const tiers = [
    {
      name: "Byte Tier",
      price: "$250",
      accent: "border-slate-200",
      bgBadge: "bg-slate-100 text-slate-700",
      description: "Perfect for local companies looking to kickstart their involvement with our community.",
      perks: [
        "Logo displayed on our official landing site footer",
        "Resumes booklet access from our active members pool",
        "Social media shoutouts over our Instagram channels"
      ]
    },
    {
      name: "Kilo Tier (Popular)",
      price: "$500",
      accent: "border-wics-pink ring-2 ring-wics-pink/20",
      bgBadge: "bg-wics-pink/10 text-wics-pink",
      description: "Direct student interaction framework. Ideal for recruitment and community presence.",
      perks: [
        "All Byte tier perks included",
        "Send 2 representatives to our End-of-Year Showcase event",
        "Host an exclusive technical workshop or panel for members",
        "Distribute company swag or pamphlets during club meetings"
      ]
    },
    {
      name: "Mega Tier",
      price: "$1,000+",
      accent: "border-wics-magenta",
      bgBadge: "bg-wics-magenta/10 text-wics-magenta",
      description: "Complete chapter co-branding. Maximum visibility across all flagship hackathons and workshops.",
      perks: [
        "All Kilo tier perks included",
        "Co-branding presence at our flagship local Hackathon",
        "Dedicated corporate judge slot on our project evaluation panels",
        "Large logo placement on all official custom club shirts"
      ]
    }
  ]

  return (
    <Layout>
      <div className="mx-auto max-w-6xl animate-fade-in">
        
        {/* HEADING BLOCK */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-wics-pink bg-wics-pink/10 px-2.5 py-1 rounded-md">
            Support Our Chapter
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-wics-dark sm:text-5xl">
            Sponsorship Packages
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Invest in diversity in tech. Help us fund free software licenses, hardware kits, and hosting assets for our computing members.
          </p>
        </div>

        {/* TIERS GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-white border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${tier.accent}`}
            >
              <div>
                {/* Package Tag & Cost */}
                <div className="flex justify-between items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${tier.bgBadge}`}>
                    {tier.name}
                  </span>
                  <span className="text-2xl font-black text-wics-dark">{tier.price}</span>
                </div>
                
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {tier.description}
                </p>

                {/* Benefits Bullet Rows */}
                <ul className="mt-6 space-y-3.5 border-t border-slate-100 pt-6">
                  {tier.perks.map((perk, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2.5 text-sm text-slate-600 leading-normal">
                      <span className="text-wics-pink shrink-0 mt-0.5">✔</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Trigger */}
              <div className="mt-8 pt-4">
                <a href="mailto:lasawics@://gmail.com">
                  <button className="w-full bg-wics-dark text-white font-bold py-3 px-4 rounded-xl transition-all hover:bg-wics-pink active:scale-95 shadow-md">
                    Become a Partner
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  )
}
