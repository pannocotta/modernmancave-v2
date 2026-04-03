'use client'

import Header from '@/components/Header'
import { useState } from 'react'

// TODO: Confirm services, prices, and durations with client
const SERVICES = [
  { name: 'Haircut', price: 35, duration: 30 },
  { name: 'Beard Trim', price: 20, duration: 15 },
  { name: 'Haircut & Beard', price: 50, duration: 45 },
  { name: 'Head Shave', price: 30, duration: 30 },
  { name: 'Kids Cut (Under 12)', price: 25, duration: 20 },
  { name: 'Hot Towel Shave', price: 40, duration: 30 },
  { name: 'Hair Design / Pattern', price: 45, duration: 45 },
  { name: 'Teeth Whitening', price: 250, duration: 90 },
]

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <img 
            src="/stock/barbershop-tools.jpg"
            alt="Modern Mancave"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-4 md:mb-6">
              BOOK YOUR APPOINTMENT
            </h1>
            <div className="w-16 md:w-20 h-1 bg-[#ff0000] mx-auto mb-6 md:mb-8"></div>
            <div className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto space-y-4">
              <p>
                Skip the wait and secure your premium grooming experience. Bookings are paid in full to guarantee your spot. Enjoy a private area, a drink on arrival, and expert service from our expert barber, nick.
              </p>
              <div className="text-left text-sm md:text-base pt-4 border-t border-zinc-800 space-y-2">
                <p className="font-bold text-white">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Full payment is required to confirm your booking.</li>
                  <li>Please arrive 10 minutes early.</li>
                  <li>If you are 10 minutes or more late, Nick reserves the right to refuse your appointment out of respect for other clients&apos; time.</li>
                  <li>Private space and refreshments included with every appointment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Notice */}
      <section className="px-4 md:px-6 pt-8 md:pt-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-[#ff0000] bg-zinc-900 p-6 md:p-8 rounded-lg">
            <p className="text-white font-bold text-lg md:text-xl mb-2">Important: Appointments with Nick Only</p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Please note: Online bookings are exclusively for Nick&apos;s private appointment space at our Banna Avenue location. Leka and other barbers do not take appointments. Walk-ins only.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Appointment Perks */}
      <section className="px-4 md:px-6 pt-8 md:pt-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black border border-zinc-800 p-6 md:p-10 rounded-lg text-center">
            <h2 className="font-headliner text-2xl md:text-3xl gradient-heading mb-4">THE PRIVATE APPOINTMENT EXPERIENCE</h2>
            <div className="w-16 h-1 bg-[#ff0000] mx-auto mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              When you book an appointment, you get your own private barber experience, including a complimentary bottle of water or Coca-Cola of your choice, a hot towel treatment, and personalised service. Every appointment is $20 extra and lets you skip the walk-in queue.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="px-4 md:px-6 pt-8 md:pt-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headliner text-2xl md:text-3xl gradient-heading mb-6 text-center">SELECT YOUR SERVICE</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`text-left p-5 rounded-lg border-2 transition-all ${
                  selectedService === index
                    ? 'border-[#ff0000] bg-zinc-900'
                    : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white font-bold text-base md:text-lg">{service.name}</span>
                  <span className="text-[#ff0000] font-bold text-lg">${service.price}</span>
                </div>
                <div className="text-gray-500 text-sm">{service.duration} mins</div>
              </button>
            ))}
          </div>

          {/* Teeth whitening day notice (Task 9) */}
          {selectedService !== null && SERVICES[selectedService].name === 'Teeth Whitening' && (
            <div className="mt-4 p-4 bg-zinc-900 border border-yellow-600 rounded-lg text-yellow-400 text-sm md:text-base">
              Teeth whitening appointments are only available on Mondays and Wednesdays.
            </div>
          )}
        </div>
      </section>

      {/* Acuity Booking Widget */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <iframe 
            src="https://app.acuityscheduling.com/schedule.php?owner=38789653"
            width="100%"
            height="800"
            frameBorder="0"
            className="w-full min-h-[800px] border-0 rounded-lg bg-white"
            title="Book Appointment"
          />
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 px-4 md:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            Having trouble booking online?
          </p>
          <p className="text-white text-lg font-bold mb-6">
            Call Nick directly on{' '}
            <a href="tel:0458520456" className="text-[#ff0000] hover:underline">0458 520 456</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0458520456"
              className="inline-block border-2 border-zinc-700 hover:border-[#ff0000] text-white font-bold transition-colors px-6 py-3"
            >
              Call Nick: 0458 520 456
            </a>
            <a
              href="https://wa.me/61458520456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-zinc-700 hover:border-[#ff0000] text-white font-bold transition-colors px-6 py-3"
            >
              WhatsApp Nick
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
