'use client'

export default function InstagramFeed() {
  // Placeholder component for Instagram feed integration

  // Placeholder: will be replaced with actual Instagram feed
  // Using Elfsight widget as the reliable production solution
  return (
    <div className="w-full">
      {/* Elfsight Instagram Feed Widget */}
      <div 
        className="elfsight-app-1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
        data-elfsight-app-lazy
      />
      
      {/* Fallback: Manual grid (populated via CMS or hardcoded for now) */}
      <div className="hidden">
        <p className="text-center text-gray-400">
          Follow us{' '}
          <a 
            href="https://instagram.com/modern_mancave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-500 underline"
          >
            @modern_mancave
          </a>
          {' '}for daily updates
        </p>
      </div>
    </div>
  )
}
