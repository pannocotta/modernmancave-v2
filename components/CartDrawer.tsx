'use client'

import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90]"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 z-[100] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-2xl font-headliner">YOUR CART</h2>
            <button
              onClick={onClose}
              className="text-white text-3xl font-light hover:rotate-90 transition-transform"
              aria-label="Close cart"
            >
              ×
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size || 'default'}`}
                    className="flex gap-4 bg-black p-4 rounded-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-400">Size: {item.size}</p>
                      )}
                      <p className="text-brand-red font-bold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1, item.size)
                          }
                          className="w-6 h-6 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1, item.size)
                          }
                          className="w-6 h-6 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="ml-auto text-red-500 hover:text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-zinc-800 space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-brand-red">${total.toFixed(2)}</span>
              </div>
              <Link
                href="/shop/checkout"
                onClick={onClose}
                className="block w-full bg-brand-red hover:bg-red-600 text-white text-center py-3 rounded-lg font-bold transition"
              >
                CHECKOUT
              </Link>
              <button
                onClick={onClose}
                className="block w-full bg-zinc-800 hover:bg-zinc-700 text-white text-center py-3 rounded-lg font-semibold transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
