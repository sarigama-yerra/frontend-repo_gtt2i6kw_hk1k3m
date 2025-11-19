import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950"></div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Works with Apple Wallet & Google Pay
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Digital loyalty cards that double retention and lift revenue by 30%
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Launch modern stamp, cashback, discount, coupon, rewards, membership, and gift card programs your customers love—on iPhone and Android. Send push messages, collect reviews, trigger geo-notifications, and grow faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
              Start 14‑day free trial
            </button>
            <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-slate-100 backdrop-blur transition hover:bg-white/10">
              Try feature demos
            </button>
            <div className="ml-2 hidden items-center gap-3 text-sm text-slate-300 sm:flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                No credit card required
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                Earn +1 free month with 30 trial members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
