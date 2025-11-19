import React from 'react'

const tiers = [
  {
    name: 'Start',
    price: 25,
    desc: 'Everything to launch your first program',
    features: [
      'Unlimited members during trial',
      'Apple Wallet & Android support',
      'Push messages & basic automations',
      'Email support'
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Grow',
    price: 45,
    highlight: true,
    desc: 'Scale with advanced automation',
    features: [
      'All Start features',
      'Advanced segments & campaigns',
      'Reviews, referrals & birthdays',
      'Priority support'
    ],
    cta: 'Choose Grow'
  },
  {
    name: 'Business',
    price: 85,
    desc: 'Multi-location & pro workflows',
    features: [
      'All Grow features',
      'Geo-notifications & locations',
      'Webhooks & API access',
      'Dedicated success manager'
    ],
    cta: 'Talk to sales'
  }
]

export default function Pricing() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">14‑day free trial. Add 30 members during trial and get an extra month free.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.highlight ? 'border-blue-400/30 bg-blue-500/5' : 'border-white/10 bg-white/[0.03]'} p-6 backdrop-blur`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">Most popular</div>
              )}
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">${tier.price}</span>
                <span className="text-slate-300">/mo</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{tier.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition ${tier.highlight ? 'bg-blue-500 text-white hover:bg-blue-400' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
