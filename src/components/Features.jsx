import React from 'react'
import { Gift, Percent, BadgeCheck, Stamp, Bell, MapPin, MessageSquare, Sparkles } from 'lucide-react'

const features = [
  { icon: Stamp, title: 'Stamp & Punch Cards', desc: 'Drive repeat visits with flexible stamp targets and instant rewards.' },
  { icon: Percent, title: 'Cashback & Discounts', desc: 'Automatic credits and targeted offers that keep customers coming back.' },
  { icon: Gift, title: 'Coupons & Gift Cards', desc: 'Digital coupons and reloadable gift cards that live in the wallet.' },
  { icon: BadgeCheck, title: 'Memberships & Tiers', desc: 'VIP perks, status levels, and benefits that increase lifetime value.' },
  { icon: Bell, title: 'Push Messages', desc: 'Send timely updates and winbacks right to the lock screen.' },
  { icon: MapPin, title: 'Geo-notifications', desc: 'Trigger offers as customers arrive near your locations.' },
  { icon: MessageSquare, title: 'Reviews & Referrals', desc: 'Automate review collection and social referrals to fuel growth.' },
  { icon: Sparkles, title: 'No App Needed', desc: 'Works on iPhone and Android—even without Google Wallet.' },
]

export default function Features() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to run a modern loyalty program</h2>
          <p className="mt-3 text-slate-300">Design, launch, and optimize your cards in minutes. No code required.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-2.5 text-blue-300 ring-1 ring-inset ring-blue-500/20">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
