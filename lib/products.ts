export interface ShopProduct {
  id: string
  name: string
  price: number
  images: string[]
  category: string
}

export const products: ShopProduct[] = [
  {
    id: 'tshirt-black',
    name: 'Modern Mancave T-Shirt',
    price: 35.00,
    images: ['/tshirt-1.jpg', '/tshirt-2.jpg'],
    category: 'Apparel'
  },
  {
    id: 'hat-black',
    name: 'Modern Mancave Snapback',
    price: 25.00,
    images: ['/Hat-1.jpg', '/Hat-2.jpg'],
    category: 'Headwear'
  },
  {
    id: 'hoodie-black',
    name: 'Modern Mancave Hoodie',
    price: 40.00,
    images: ['/Jumper-1.jpg', '/Jumper-2.jpg'],
    category: 'Apparel'
  }
]
