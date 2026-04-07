import Header from '@/components/Header'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-headliner gradient-heading mb-6">
            ORDER CONFIRMED!
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Thanks for your order. We&apos;ll send a confirmation email shortly with tracking details.
          </p>

          <div className="space-y-4">
            <Link
              href="/shop"
              className="inline-block bg-brand-red hover:bg-red-600 px-8 py-3 rounded-lg font-bold transition"
            >
              Continue Shopping
            </Link>
            <div>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
