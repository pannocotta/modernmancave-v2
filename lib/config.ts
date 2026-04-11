export const SITE = {
  name: 'Modern Mancave',
  tagline: 'Premium Grooming for the Modern Man',
  established: 2017,
  owner: 'Tristan Sergi',
  googleRating: { stars: 4.5, count: 183 },
  facebookRating: { percent: 92, count: 52 },
} as const

export const CONTACT = {
  nick: { name: 'Nick', phone: '0458 520 456', phoneHref: 'tel:0458520456', whatsapp: 'https://wa.me/61458520456' },
  tattoo: { name: 'Cameron', phone: '0413 074 669', phoneHref: 'tel:0413074669' },
} as const

export const SOCIAL = {
  instagram: { handle: '@modern_mancave', url: 'https://www.instagram.com/modern_mancave/' },
  facebook: { url: 'https://www.facebook.com/TristansBarberShop' },
  nickInstagram: { handle: '@barberniks', url: 'https://www.instagram.com/barberniks' },
  kevinInstagram: { handle: '@kevinmarkarana', url: 'https://www.instagram.com/kevinmarkarana' },
  delvinInstagram: { handle: '@dhelatyourservice', url: 'https://www.instagram.com/dhelatyourservice' },
  lekaInstagram: { handle: '@barber.leka', url: 'https://www.instagram.com/barber.leka' },
  tattooInstagram: { handle: '@relentless_image_tattoo_shop', url: 'https://www.instagram.com/relentless_image_tattoo_shop' },
} as const

export const LOCATIONS = [
  {
    name: 'BANNA AVE',
    address: '224a Banna Ave, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: true,
  },
  {
    name: 'GRIFFITH CENTRAL',
    address: '10-12 Yambil Street, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=10-12+Yambil+Street+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=10-12%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
  {
    name: 'YAMBIL ST',
    address: 'Shop 1, 168 Yambil Street, Griffith NSW 2680',
    hours: [
      'Mon-Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: Closed',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=168+Yambil+Street+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=168%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
  {
    name: 'MODERN MANCAVE TATTOO STUDIO',
    address: '224a Banna Ave, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
] as const

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'THE TEAM', href: '/team' },
  { label: 'COMMUNITY', href: '/community' },
  { label: 'PRICES', href: '/prices' },
  { label: 'LOCATIONS', href: '/locations' },
  { label: 'MOBILE BARBER', href: '/mobile-barber' },
  { label: 'BARBER TRAINING', href: '/mobile-barber#education' },
  { label: 'MERCH', href: '/shop' },
  { label: 'FRANCHISE', href: '/franchise' },
  { label: 'DOWNLOAD APP', href: '/app' },
] as const

export const BOOKING_LINK = { label: 'BOOK NOW', href: '/booking' } as const

export const TEAM = [
  {
    name: 'NICK',
    initial: 'N',
    image: '/team/nick.png',
    title: 'Banna Ave',
    bio: "Nick runs the private appointment space at Banna Ave. One-on-one service with a complimentary drink and hot towel treatment. No rush, no distractions. A premium grooming experience you won't find anywhere else.",
    instagram: { handle: '@barberniks', url: 'https://www.instagram.com/barberniks' },
  },
  {
    name: 'KEVIN',
    initial: 'K',
    image: '/team/kevin.png',
    title: 'Banna Ave',
    bio: 'Over a decade of experience from the Philippines. Kevin brings precision, artistry, and a calm focus to every chair. Classic tapers, skin fades, or something bold. Sharp eye for detail and a client favourite for good reason.',
    instagram: { handle: '@kevinmarkarana', url: 'https://www.instagram.com/kevinmarkarana' },
  },
  {
    name: 'DELVIN',
    initial: 'D',
    image: '/team/delvin.png',
    title: 'Griffith Central',
    bio: 'Ten years of barbering from the Philippines. Delvin blends technical skill with genuine care in every cut. Clean fades, textured crops, beard work. Warm energy and sharp results, every single time.',
    instagram: { handle: '@barber_dhel', url: 'https://www.instagram.com/barber_dhel' },
  },
  {
    name: 'LEKA',
    initial: 'L',
    image: '/team/leka.png',
    title: 'Yambil St',
    bio: "Straight out of Tonga with over a decade in the game. Leka is a powerhouse behind the chair. Bold cuts, sharp lineups, and full of personality. Island roots with a unique edge you won't find elsewhere.",
    instagram: { handle: '@barber.leka', url: 'https://www.instagram.com/barber.leka' },
  },
  {
    name: 'ANTONIO',
    initial: 'A',
    image: '/team/antonio.png',
    title: 'Griffith Central',
    bio: "Italian roots and a sharp eye for clean work. Antonio brings old-school discipline to modern cuts. Fades, beard sculpting, and classic styles done right. Quiet confidence in the chair and quality you can see.",
    instagram: { handle: '@_parmentola.antonio_', url: 'https://www.instagram.com/_parmentola.antonio_' },
  },
] as const

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Best barbershop in town by far! An experience like no other. The boys know how to make you feel welcome and always deliver a quality cut.',
    name: 'JOSH M.',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'The best haircut I have had in Griffith by far. Very professional and friendly staff. The attention to detail is second to none.',
    name: 'DANIEL R.',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'Great atmosphere and absolutely immaculate service! Competitive pricing too. Would not go anywhere else.',
    name: 'MARCUS T.',
    source: 'Google',
  },
] as const
