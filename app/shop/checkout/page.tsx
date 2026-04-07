'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [processing, setProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
    state: 'NSW',
    phone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In production, integrate with Stripe here
    clearCart()
    router.push('/shop/success')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-headliner gradient-heading mb-6">YOUR CART IS EMPTY</h1>
          <Link
            href="/shop"
            className="inline-block bg-brand-red hover:bg-red-600 px-8 py-3 rounded-lg font-bold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headliner gradient-heading mb-8 text-center">CHECKOUT</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="bg-zinc-900 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-headliner mb-6">SHIPPING DETAILS</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                    >
                      <option>NSW</option>
                      <option>VIC</option>
                      <option>QLD</option>
                      <option>WA</option>
                      <option>SA</option>
                      <option>TAS</option>
                      <option>ACT</option>
                      <option>NT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Postcode *</label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{4}"
                      className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                    processing
                      ? 'bg-zinc-700 cursor-not-allowed'
                      : 'bg-brand-red hover:bg-red-600'
                  }`}
                >
                  {processing ? 'PROCESSING...' : `PAY $${total.toFixed(2)}`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-zinc-900 p-6 md:p-8 rounded-lg h-fit">
              <h2 className="text-2xl font-headliner mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size || 'default'}`}
                    className="flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-400">Size: {item.size}</p>
                      )}
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-700 pt-4 space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{total >= 100 ? 'FREE' : '$10.00'}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-2 border-t border-zinc-700">
                  <span>Total</span>
                  <span className="text-brand-red">
                    ${(total + (total >= 100 ? 0 : 10)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
