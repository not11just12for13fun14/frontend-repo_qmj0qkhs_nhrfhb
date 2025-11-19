import React from 'react'
import Banner from './components/Banner'
import DeviceInfo from './components/DeviceInfo'
import ModeSwitcher from './components/ModeSwitcher'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Glow decorations */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl p-6 sm:p-10 space-y-8">
        {/* Top banner */}
        <Banner />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <DeviceInfo />
            <ModeSwitcher />
          </div>
          <div>
            <About />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-blue-300/60 text-sm py-6">Didesain elegan oleh Flames</div>
      </div>
    </div>
  )
}

export default App
