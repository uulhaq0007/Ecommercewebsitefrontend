import { Link, useNavigate } from 'react-router';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent"
            >
              <span className="text-2xl font-black text-background">N</span>
            </motion.div>
            <span className="text-3xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              NOVO
            </span>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              to="/products"
              className="text-sm uppercase tracking-wider transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Shop
            </Link>
            <Link
              to="/products?category=Electronics"
              className="text-sm uppercase tracking-wider transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Electronics
            </Link>
            <Link
              to="/products?category=Clothing"
              className="text-sm uppercase tracking-wider transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Clothing
            </Link>
            <Link
              to="/products?category=Shoes"
              className="text-sm uppercase tracking-wider transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Shoes
            </Link>
            <Link
              to="/products?category=Accessories"
              className="text-sm uppercase tracking-wider transition-colors hover:text-accent"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Accessories
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <form onSubmit={handleSearch} className="hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-64 border-b border-white/20 bg-transparent py-2 pl-2 pr-10 text-sm transition-all focus:border-accent focus:outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>

            <Link to="/cart" className="relative">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ShoppingCart className="h-6 w-6 transition-colors hover:text-accent" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-background"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-white/10 bg-background md:hidden"
          >
            <nav className="space-y-4 px-4 py-6">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider transition-colors hover:text-accent"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Shop
              </Link>
              <Link
                to="/products?category=Electronics"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider transition-colors hover:text-accent"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Electronics
              </Link>
              <Link
                to="/products?category=Clothing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider transition-colors hover:text-accent"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Clothing
              </Link>
              <Link
                to="/products?category=Shoes"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider transition-colors hover:text-accent"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Shoes
              </Link>
              <Link
                to="/products?category=Accessories"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider transition-colors hover:text-accent"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Accessories
              </Link>
              <form onSubmit={(e) => {
                handleSearch(e);
                setMobileMenuOpen(false);
              }} className="pt-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full border-b border-white/20 bg-transparent py-2 pl-2 pr-10 text-sm transition-all focus:border-accent focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
