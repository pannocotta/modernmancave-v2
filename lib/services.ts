export interface ServiceCategory {
  name: string
  services: { name: string; price: number; duration?: number }[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "KIDS CUTS",
    services: [
      { name: 'Baby', price: 30 },
      { name: 'Baby Double Zero Fade', price: 35 },
      { name: 'Primary', price: 35 },
      { name: 'Primary School, Skin Fade', price: 38 },
      { name: 'High School', price: 35 },
      { name: 'High School, Skin Fade', price: 38 },
    ],
  },
  {
    name: "MEN'S CUTS",
    services: [
      { name: "Men's Cut", price: 40 },
      { name: "Men's Cut & Beard Trim", price: 50 },
      { name: "Men's Cut, Beard Trim, Line up & Shape", price: 58 },
    ],
  },
  {
    name: 'SKIN FADES',
    services: [
      { name: 'Skin Fade', price: 45 },
      { name: 'Skin Fade & Beard Trim', price: 55 },
      { name: 'Skin Fade, Beard Trim, Line up & Shape', price: 60 },
    ],
  },
  {
    name: 'BUZZ CUTS',
    services: [
      { name: 'Buzz Cut', price: 30 },
      { name: 'Buzz Cut & Beard Trim', price: 40 },
      { name: 'Buzz Cut, Beard Trim, Line up & Shape', price: 50 },
    ],
  },
  {
    name: 'HEAD SHAVES',
    services: [
      { name: 'Head Shave', price: 40 },
      { name: 'Head Shave & Beard Trim', price: 45 },
      { name: 'Head Shave, Beard Trim, Line up & Shape', price: 60 },
    ],
  },
  {
    name: 'HOT TOWEL SHAVES',
    services: [
      { name: 'Hot Towel Shave', price: 45 },
      { name: "Hot Towel Shave & Men's Hair Cut", price: 65 },
    ],
  },
  {
    name: 'BEARD SERVICES',
    services: [
      { name: 'Beard Trim', price: 20 },
      { name: 'Beard Trim, Line Up & Shape', price: 25 },
    ],
  },
  {
    name: 'EXTRAS',
    services: [
      { name: 'Hair Art', price: 15 },
      { name: 'Pensioner (any haircut)', price: 30 },
    ],
  },
]

export const TEETH_WHITENING = {
  name: 'Teeth Whitening',
  price: 250,
  duration: 90,
  availability: 'Mondays and Wednesdays',
} as const
