import React from 'react'

export default function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-fuchsia-600/30 p-[1px] shadow-[0_0_80px_-20px_rgba(59,130,246,.5)]">
      <div className="rounded-3xl bg-slate-900/60 px-6 py-8 sm:px-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Magisk Module Controller</h2>
            <p className="mt-2 text-sm sm:text-base text-blue-200/80">Kelola mode script Anda dengan tampilan elegan dan mewah.</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 border border-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-emerald-200">Backend aktif</span>
          </div>
        </div>
      </div>
    </div>
  )
}
