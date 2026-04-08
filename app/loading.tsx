export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
        <div className="text-sm text-gray-500 tracking-widest font-headliner">LOADING</div>
      </div>
    </div>
  )
}
