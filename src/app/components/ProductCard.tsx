import { Link } from 'react-router';
import { Product } from '../data/products';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden bg-card">
          <div className="aspect-square relative">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            )}
            <img
              src={product.image}
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
              className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center bg-accent text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
              <ShoppingCart size={20} />
            </motion.button>

            {product.featured && (
              <div className="absolute left-4 top-4 bg-accent px-3 py-1 text-xs uppercase tracking-wider text-background" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Featured
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>

            <h3
              className="mb-3 text-xl tracking-tight transition-colors group-hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              {product.name}
            </h3>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                ${product.price.toFixed(2)}
              </span>
              {product.stock < 20 && (
                <span className="text-xs text-destructive">
                  Only {product.stock} left
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
