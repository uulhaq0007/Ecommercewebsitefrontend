export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  featured: boolean;
  stock: number;
}

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description: "Premium noise-canceling headphones with 40-hour battery life and spatial audio support. Crafted from aerospace-grade aluminum.",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    rating: 4.8,
    featured: true,
    stock: 45
  },
  {
    id: "2",
    name: "Smart Watch Ultra",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance up to 100m. Titanium case with sapphire crystal.",
    price: 449.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    rating: 4.9,
    featured: true,
    stock: 32
  },
  {
    id: "3",
    name: "Mechanical Keyboard RGB",
    description: "Premium mechanical keyboard with custom switches, per-key RGB lighting, and aluminum frame. Perfect for gaming and productivity.",
    price: 159.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    rating: 4.7,
    featured: false,
    stock: 78
  },
  {
    id: "4",
    name: "Wireless Mouse Elite",
    description: "Ergonomic wireless mouse with precision sensor, customizable buttons, and 70-hour battery life.",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
    rating: 4.6,
    featured: false,
    stock: 120
  },
  {
    id: "5",
    name: "4K Webcam Pro",
    description: "Professional 4K webcam with autofocus, HDR, and dual microphones. Perfect for streaming and video calls.",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1625255746900-d60c7fd9f2cb?w=800&q=80",
    rating: 4.5,
    featured: false,
    stock: 56
  },
  {
    id: "6",
    name: "Portable SSD 2TB",
    description: "Ultra-fast portable SSD with USB-C connectivity, shock resistance, and compact design.",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
    rating: 4.9,
    featured: false,
    stock: 89
  },

  // Clothing
  {
    id: "7",
    name: "Premium Denim Jacket",
    description: "Classic denim jacket with modern fit. Made from sustainable organic cotton with vintage wash.",
    price: 129.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    rating: 4.7,
    featured: true,
    stock: 34
  },
  {
    id: "8",
    name: "Merino Wool Sweater",
    description: "Luxurious merino wool sweater with ribbed details. Soft, breathable, and temperature-regulating.",
    price: 89.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    rating: 4.8,
    featured: false,
    stock: 67
  },
  {
    id: "9",
    name: "Tailored Blazer",
    description: "Contemporary blazer with slim fit and structured shoulders. Italian wool blend in charcoal grey.",
    price: 249.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    rating: 4.9,
    featured: false,
    stock: 23
  },
  {
    id: "10",
    name: "Graphic T-Shirt Collection",
    description: "Limited edition graphic tee made from organic cotton. Bold print design by emerging artists.",
    price: 39.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    rating: 4.5,
    featured: false,
    stock: 156
  },
  {
    id: "11",
    name: "Slim Fit Chinos",
    description: "Versatile chinos with stretch fabric and modern slim fit. Perfect for casual or business casual.",
    price: 69.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    rating: 4.6,
    featured: false,
    stock: 94
  },

  // Shoes
  {
    id: "12",
    name: "Premium Leather Sneakers",
    description: "Handcrafted Italian leather sneakers with memory foam insole. Classic design meets modern comfort.",
    price: 189.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    rating: 4.8,
    featured: true,
    stock: 45
  },
  {
    id: "13",
    name: "Running Shoes Elite",
    description: "High-performance running shoes with carbon fiber plate and responsive cushioning. Designed for speed.",
    price: 179.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    rating: 4.9,
    featured: false,
    stock: 67
  },
  {
    id: "14",
    name: "Chelsea Boots",
    description: "Premium suede Chelsea boots with leather sole and elastic side panels. Timeless style.",
    price: 229.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    rating: 4.7,
    featured: false,
    stock: 38
  },
  {
    id: "15",
    name: "Minimalist Sandals",
    description: "Sustainable leather sandals with cork footbed. Handmade with natural materials.",
    price: 79.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
    rating: 4.5,
    featured: false,
    stock: 72
  },
  {
    id: "16",
    name: "High-Top Sneakers",
    description: "Vintage-inspired high-top sneakers with canvas upper and rubber sole. Bold colorways available.",
    price: 99.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    rating: 4.6,
    featured: false,
    stock: 110
  },

  // Accessories
  {
    id: "17",
    name: "Leather Messenger Bag",
    description: "Full-grain leather messenger bag with brass hardware. Laptop compartment and multiple pockets.",
    price: 279.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    rating: 4.9,
    featured: true,
    stock: 29
  },
  {
    id: "18",
    name: "Minimalist Wallet",
    description: "Slim leather wallet with RFID protection. Holds up to 8 cards and cash.",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    rating: 4.7,
    featured: false,
    stock: 145
  },
  {
    id: "19",
    name: "Designer Sunglasses",
    description: "Acetate frame sunglasses with polarized lenses. UV400 protection and anti-reflective coating.",
    price: 159.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    rating: 4.8,
    featured: false,
    stock: 63
  },
  {
    id: "20",
    name: "Cashmere Scarf",
    description: "100% cashmere scarf with hand-rolled edges. Luxuriously soft and warm.",
    price: 129.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    rating: 4.9,
    featured: false,
    stock: 41
  },
  {
    id: "21",
    name: "Leather Belt Classic",
    description: "Italian leather belt with polished buckle. Reversible design for versatility.",
    price: 69.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-5c44841ba14b?w=800&q=80",
    rating: 4.6,
    featured: false,
    stock: 87
  },
  {
    id: "22",
    name: "Wool Beanie",
    description: "Merino wool beanie with ribbed knit. Perfect for cold weather.",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    rating: 4.5,
    featured: false,
    stock: 178
  }
];

export const categories = [
  "All Products",
  "Electronics",
  "Clothing",
  "Shoes",
  "Accessories"
];
