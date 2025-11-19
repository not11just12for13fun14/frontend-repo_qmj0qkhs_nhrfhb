import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function ModeSwitcher() {
  const [mode, setMode] = useState('unknown')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  async function loadMode() {
    try {
      const res = await fetch(`${BACKEND}/api/mode`)
      const data = await res.json()
      setMode(data.mode)
    } catch {
      setMode('unknown')
    }
  }

  useEffect(() => { loadMode() }, [])

  async function updateMode(newMode) {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch(`${BACKEND}/api/mode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: newMode })
      })
      if (!res.ok) throw new Error('Gagal mengubah mode. Pastikan perangkat root dan path benar.')
      await res.json()
      setMode(newMode)
      setMessage('Berhasil menyimpan konfigurasi!')
    } catch (e) {
      setMessage(e.message)
    } finally {
      setSaving(false)
    }
  }

  const isAuto = mode === 'otomatis'
  const isStatic = mode === 'statis'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
      <div className="text-sm uppercase tracking-wide text-blue-200/70">Mode Konfigurasi</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => updateMode('otomatis')}
          disabled={saving}
          className={`flex-1 rounded-xl border px-4 py-3 transition ${isAuto ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200' : 'border-white/10 hover:border-white/20 text-blue-100'}`}
        >
          Otomatis
        </button>
        <button
          onClick={() => updateMode('statis')}
          disabled={saving}
          className={`flex-1 rounded-xl border px-4 py-3 transition ${isStatic ? 'border-fuchsia-400/50 bg-fuchsia-500/10 text-fuchsia-200' : 'border-white/10 hover:border-white/20 text-blue-100'}`}
        >
          Statis
        </button>
      </div>
      <div className="text-sm text-blue-200/70">Status saat ini: <span className="font-semibold text-white">{mode}</span></div>
      {message && <div className="text-sm text-blue-200/80">{message}</div>}
    </div>
  )
}
