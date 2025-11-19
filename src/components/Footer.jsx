import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-400">© 2025 Loyalty Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
