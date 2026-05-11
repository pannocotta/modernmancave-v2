export interface VipInclusion {
  number: string
  label: string
  caption: string
}

export const VIP_INCLUSIONS: VipInclusion[] = [
  { number: '01', label: 'Reserved Time', caption: 'No waiting' },
  { number: '02', label: 'Private Room', caption: 'A space of your own' },
  { number: '03', label: 'Hair Wash', caption: 'Fresh start' },
  { number: '04', label: 'Drink On Us', caption: 'Non-alcoholic' },
  { number: '05', label: 'Hot Towel Ritual', caption: 'Steamed finish' },
  { number: '06', label: 'With Nik', caption: 'Banna Ave Only' },
]
