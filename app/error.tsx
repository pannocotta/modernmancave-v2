'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-headliner gradient-heading mb-6">SOMETHING WENT WRONG</h1>
        <p className="text-gray-400 mb-8">We hit a snag. Give it another shot.</p>
        <button
          onClick={reset}
          className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 font-bold transition"
        >
          TRY AGAIN
        </button>
      </div>
    </main>
  )
}
