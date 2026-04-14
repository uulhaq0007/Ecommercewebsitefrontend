import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const total = getCartTotal();
  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-flex h-32 w-32 items-center justify-center bg-muted"
          >
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          </motion.div>
          <h1
            className="mb-4 text-5xl tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            YOUR CART IS EMPTY
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Discover amazing products and start shopping
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 bg-accent px-8 py-4 text-background"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Shop Now
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="border-b border-white/10 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 text-6xl tracking-tighter sm:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SHOPPING CART
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Items
              </h2>
              <button
                onClick={clearCart}
                className="text-sm text-destructive transition-colors hover:underline"
              >
                Clear Cart
              </button>
            </div>

            <AnimatePresence mode="popLayout">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-6 flex gap-6 border-b border-white/10 pb-6"
                >
                  <Link to={`/product/${item.id}`} className="group relative h-32 w-32 flex-shrink-0 overflow-hidden bg-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            className="mb-1 block text-xl transition-colors hover:text-accent"
                            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-white/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 transition-colors hover:bg-accent hover:text-background"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 transition-colors hover:bg-accent hover:text-background"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <div className="border border-white/10 bg-card p-6">
              <h2
                className="mb-6 text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Order Summary
              </h2>

              <div className="space-y-4 border-b border-white/10 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {total < 50 && (
                  <div className="bg-accent/10 p-3 text-sm text-accent">
                    Add ${(50 - total).toFixed(2)} more for free shipping!
                  </div>
                )}
              </div>

              <div className="py-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Total
                  </span>
                  <span className="text-3xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mb-3 w-full bg-accent py-4 text-background transition-all hover:bg-accent/90"
                onClick={() => alert('Checkout feature coming soon!')}
              >
                <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Proceed to Checkout
                </span>
              </motion.button>

              <Link to="/products">
                <button className="w-full border border-white/20 py-4 transition-all hover:border-accent hover:bg-accent/5">
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Continue Shopping
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
