import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function DeviceInfo() {
  const [lines, setLines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchInfo() {
      try {
        const res = await fetch(`${BACKEND}/api/device`)
        if (!res.ok) throw new Error('Gagal memuat info perangkat')
        const data = await res.json()
        // Animate sequential appearance like ui_print + sleep
        const pretty = data.pretty || []
        let idx = 0
        setLines([])
        setLoading(false)
        const interval = setInterval(() => {
          setLines(prev => (idx < pretty.length ? [...prev, pretty[idx++]] : prev))
          if (idx >= pretty.length) clearInterval(interval)
        }, 200)
        return () => clearInterval(interval)
      } catch (e) {
        setError(e.message)
        setLoading(false)
      }
    }
    fetchInfo()
  }, [])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 text-sm uppercase tracking-wide text-blue-200/70">Informasi Perangkat</div>
      {loading && <div className="text-blue-200/70">Memuat...</div>}
      {error && <div className="text-rose-300">{error}</div>}
      <ul className="space-y-2 text-blue-100">
        {lines.map((l, i) => (
          <li key={i} className="opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{animationDelay: `${i*120}ms`}}>
            {l}
          </li>
        ))}
      </ul>
    </div>
  )
}
