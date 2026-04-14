import { useParams, Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft, Package, Shield, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Product Not Found
          </h1>
          <Link to="/products" className="text-accent hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => navigate('/cart'), 300);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b border-white/10 bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center space-x-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Back
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square overflow-hidden bg-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.featured && (
              <div className="absolute left-6 top-6 bg-accent px-4 py-2 text-sm uppercase tracking-wider text-background" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Featured
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <Link
                to={`/products?category=${product.category}`}
                className="text-sm uppercase tracking-widest text-accent hover:underline"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                {product.category}
              </Link>
            </div>

            <h1
              className="mb-6 text-5xl leading-tight tracking-tighter sm:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {product.name}
            </h1>

            <div className="mb-6 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg">{product.rating}</span>
              <span className="text-muted-foreground">({Math.floor(Math.random() * 500) + 100} reviews)</span>
            </div>

            <div className="mb-8 border-b border-t border-white/10 py-8">
              <div className="mb-2 text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                ${product.price.toFixed(2)}
              </div>
              {product.stock < 20 && (
                <p className="text-sm text-destructive">
                  Only {product.stock} left in stock
                </p>
              )}
            </div>

            <div className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Quantity:
                </label>
                <div className="flex items-center border border-white/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 transition-colors hover:bg-accent hover:text-background"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 transition-colors hover:bg-accent hover:text-background"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center space-x-3 border border-white/20 px-8 py-4 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <ShoppingCart size={20} />
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {addedToCart ? 'Added!' : 'Add to Cart'}
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  className="flex flex-1 items-center justify-center space-x-3 bg-accent px-8 py-4 text-background transition-all hover:bg-accent/90"
                >
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Buy Now
                  </span>
                </motion.button>
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-8">
              {[
                { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                { icon: Shield, title: 'Secure Payment', desc: 'Protected transactions' },
                { icon: Package, title: 'Easy Returns', desc: '30-day return policy' }
              ].map((feature) => (
                <div key={feature.title} className="flex items-center space-x-4">
                  <feature.icon className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2
              className="mb-12 text-4xl tracking-tighter sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
