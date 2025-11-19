import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ImpactCalculator from './components/ImpactCalculator'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSecondary = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onPrimaryClick={handlePrimary} onSecondaryClick={handleSecondary} />
      <div id="features"><Features /></div>
      <ImpactCalculator />
      <div id="pricing"><Pricing /></div>
      <Footer />
    </div>
  )
}

export default App
