import React, { useMemo, useState } from 'react'

export default function ImpactCalculator() {
  const [visits, setVisits] = useState(1200)
  const [avg, setAvg] = useState(18)
  const [retention, setRetention] = useState(2) // x2
  const [uplift, setUplift] = useState(30) // 30%

  const result = useMemo(() => {
    const base = visits * avg
    const retained = base * (retention - 1)
    const lifted = base * (uplift / 100)
    const total = base + retained + lifted
    return { base, retained, lifted, total }
  }, [visits, avg, retention, uplift])

  const format = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 0 })

  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projected economic impact</h2>
          <p className="mt-3 text-slate-300">See how loyalty boosts your revenue. Adjust the sliders to match your business.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Monthly customer visits</label>
                <input type="range" min="100" max="10000" value={visits} onChange={(e) => setVisits(Number(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-white">{format(visits)}</div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Average order value ($)</label>
                <input type="range" min="5" max="120" value={avg} onChange={(e) => setAvg(Number(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-white">${format(avg)}</div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Retention multiplier</label>
                <input type="range" min="1" max="3" step="0.1" value={retention} onChange={(e) => setRetention(Number(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-white">{retention.toFixed(1)}x</div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Revenue lift (%)</label>
                <input type="range" min="0" max="100" value={uplift} onChange={(e) => setUplift(Number(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-white">{uplift}%</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-fuchsia-500/10 to-cyan-500/10 p-6">
            <div className="grid grid-cols-2 gap-4 text-white">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300">Base monthly revenue</div>
                <div className="mt-1 text-2xl font-semibold">${format(result.base)}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300">Retention impact</div>
                <div className="mt-1 text-2xl font-semibold">+${format(result.retained)}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300">Revenue uplift</div>
                <div className="mt-1 text-2xl font-semibold">+${format(result.lifted)}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-300">Projected total</div>
                <div className="mt-1 text-2xl font-semibold">${format(result.total)}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">Estimates only. Connect your POS data for precise modeling.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
