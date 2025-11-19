import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function About() {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BACKEND}/api/about`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        setData({ error: e.message })
      }
    })()
  }, [])

  if (!data) return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-200/70">Memuat...</div>
  )

  if (data.error) return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-rose-300">{data.error}</div>
  )

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 text-sm uppercase tracking-wide text-blue-200/70">Tentang Pengembang & Modul</div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <div className="text-blue-200/70 text-sm">Pengembang</div>
          <div className="text-white font-semibold">{data.developer.name}</div>
          <div className="text-blue-200/80 text-sm">Kontak: {data.developer.contact}</div>
          <a className="text-blue-300 hover:text-blue-200 text-sm underline" href={data.developer.website} target="_blank" rel="noreferrer">Kunjungi situs</a>
        </div>
        <div className="space-y-1">
          <div className="text-blue-200/70 text-sm">Modul</div>
          <div className="text-white font-semibold">{data.module.name}</div>
          <div className="text-blue-200/80 text-sm">{data.module.description}</div>
          <div className="text-blue-200/60 text-xs">Lokasi konfigurasi: {data.module.config_path}</div>
        </div>
      </div>
    </div>
  )
}
