import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-headliner gradient-heading mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 font-bold transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  )
}
