/**
 * Acuity scheduler integration — service catalogue + URL helpers.
 *
 * IDs scraped from the live scheduler at owner=39144906 on 2026-04-27.
 * Update by re-scraping if appointment types change in the Acuity dashboard.
 */

export const ACUITY_OWNER = '39144906'
export const ACUITY_BASE_URL = `https://app.acuityscheduling.com/schedule.php?owner=${ACUITY_OWNER}`

export type ServiceCategory =
  | "Men's Cuts"
  | 'Skin Fades'
  | 'Buzz Cuts'
  | 'Head Shaves'
  | 'Hot Towel Shaves'
  | 'Beard Services'
  | 'Kids Cuts'
  | 'Specialty'

export interface AcuityService {
  id: number
  name: string
  price: number
  duration: number
  category: ServiceCategory
}

export const ACUITY_SERVICES: AcuityService[] = [
  // Men's Cuts
  { id: 92440644, name: "Men's Cut", price: 60, duration: 25, category: "Men's Cuts" },
  { id: 92440668, name: "Men's Cut & Beard Trim", price: 70, duration: 30, category: "Men's Cuts" },
  { id: 92440699, name: "Men's Cut, Beard Trim & Line Up", price: 78, duration: 35, category: "Men's Cuts" },

  // Skin Fades
  { id: 92440719, name: 'Skin Fade', price: 65, duration: 30, category: 'Skin Fades' },
  { id: 92440764, name: 'Skin Fade, Beard Trim & Line Up', price: 80, duration: 40, category: 'Skin Fades' },

  // Buzz Cuts
  { id: 92440783, name: 'Buzz Cut', price: 50, duration: 15, category: 'Buzz Cuts' },
  { id: 92440811, name: 'Buzz Cut & Beard Trim', price: 60, duration: 20, category: 'Buzz Cuts' },
  { id: 92440850, name: 'Buzz Cut, Beard Trim & Line Up', price: 70, duration: 25, category: 'Buzz Cuts' },

  // Head Shaves
  { id: 92440891, name: 'Head Shave', price: 60, duration: 30, category: 'Head Shaves' },
  { id: 92440902, name: 'Head Shave & Beard Trim', price: 65, duration: 35, category: 'Head Shaves' },
  { id: 92440926, name: 'Head Shave, Beard Trim & Line Up', price: 80, duration: 40, category: 'Head Shaves' },

  // Hot Towel Shaves
  { id: 92440977, name: 'Hot Towel Shave', price: 65, duration: 25, category: 'Hot Towel Shaves' },
  { id: 92440997, name: 'Hot Towel Shave & Haircut', price: 85, duration: 45, category: 'Hot Towel Shaves' },

  // Beard Services
  { id: 92441036, name: 'Beard Trim', price: 40, duration: 10, category: 'Beard Services' },
  { id: 92441060, name: 'Beard Trim & Line Up', price: 45, duration: 15, category: 'Beard Services' },

  // Kids Cuts
  { id: 92328251, name: 'Baby', price: 50, duration: 20, category: 'Kids Cuts' },
  { id: 92440505, name: 'Baby Skin Fade', price: 55, duration: 25, category: 'Kids Cuts' },
  { id: 92440530, name: 'Primary School', price: 55, duration: 20, category: 'Kids Cuts' },
  { id: 92440579, name: 'Primary School Skin Fade', price: 58, duration: 25, category: 'Kids Cuts' },
  { id: 92440606, name: 'High School', price: 55, duration: 25, category: 'Kids Cuts' },
  { id: 92440623, name: 'High School Skin Fade', price: 58, duration: 30, category: 'Kids Cuts' },

  // Specialty
  { id: 6945612, name: 'Hair Art', price: 15, duration: 15, category: 'Specialty' },
  { id: 92449597, name: 'Teeth Whitening', price: 250, duration: 120, category: 'Specialty' },
]

/** The four most popular services to surface as quick-book tiles. */
export const FEATURED_SERVICE_IDS = [92440644, 92440719, 92440668, 92440977] as const

export const SERVICE_CATEGORIES_ORDERED: ServiceCategory[] = [
  "Men's Cuts",
  'Skin Fades',
  'Buzz Cuts',
  'Head Shaves',
  'Hot Towel Shaves',
  'Beard Services',
  'Kids Cuts',
  'Specialty',
]

export function getServicesByCategory(category: ServiceCategory): AcuityService[] {
  return ACUITY_SERVICES.filter((s) => s.category === category)
}

export function getServiceById(id: number): AcuityService | undefined {
  return ACUITY_SERVICES.find((s) => s.id === id)
}

/** Build the deep-link URL into Acuity, optionally pre-selecting a service. */
export function buildAcuityUrl(appointmentTypeId?: number | string): string {
  if (!appointmentTypeId) return ACUITY_BASE_URL
  return `${ACUITY_BASE_URL}&appointmentType=${appointmentTypeId}`
}

/** Build the local custom booking URL for a given service.
 *  When a service ID is provided, links to the multi-step app-style /book flow.
 *  When omitted, falls back to the iframe-based /booking page (full picker). */
export function buildBookingUrl(appointmentTypeId?: number): string {
  if (!appointmentTypeId) return '/booking'
  return `/book/${appointmentTypeId}`
}
