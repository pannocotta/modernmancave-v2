'use client'

import { useState } from 'react'

export default function LoyaltyCard() {
  const [stamps] = useState(7) // Demo: 7 out of 10
  const total = 10

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-[#ff0000] rounded-xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-headliner mb-1">LOYALTY REWARDS</h3>
          <p className="text-sm text-gray-400">Get your 10th cut free</p>
        </div>
        <div className="text-5xl">✂️</div>
      </div>
      
      <div className="grid grid-cols-5 gap-3 mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center text-2xl transition-all duration-500 ${
              i < stamps
                ? 'bg-[#ff0000] shadow-lg shadow-[#ff0000]/50 scale-100'
                : 'bg-zinc-800 scale-95'
            }`}
          >
            {i < stamps ? '✓' : ''}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          {stamps} of {total} stamps
        </div>
        <div className="text-sm font-bold text-[#ff0000]">
          {total - stamps} more to go!
        </div>
      </div>
      
      {stamps >= total && (
        <div className="mt-4 p-4 bg-[#ff0000] rounded-lg text-center animate-pulse">
          <div className="font-bold">🎉 FREE CUT UNLOCKED!</div>
        </div>
      )}
    </div>
  )
}
