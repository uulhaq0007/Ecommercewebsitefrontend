import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ITEMS_PER_PAGE = 12;

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || 'All Products';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (categoryFilter !== 'All Products') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, categoryFilter, sortBy, priceRange]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    if (category === 'All Products') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b border-white/10 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-6xl tracking-tighter sm:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {searchQuery ? 'SEARCH RESULTS' : categoryFilter === 'All Products' ? 'ALL PRODUCTS' : categoryFilter.toUpperCase()}
          </motion.h1>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-3"
            >
              <span className="text-muted-foreground">
                Searching for: <span className="text-foreground">{searchQuery}</span>
              </span>
              <button
                onClick={clearSearch}
                className="flex items-center space-x-1 text-sm text-accent hover:underline"
              >
                <X size={16} />
                <span>Clear</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{filteredAndSortedProducts.length} products</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 border border-white/20 px-4 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              <SlidersHorizontal size={18} />
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                Filters
              </span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-white/20 bg-background px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:border-accent focus:border-accent focus:outline-none"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 overflow-hidden border border-white/10 bg-card p-6"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                          categoryFilter === category
                            ? 'bg-accent text-background'
                            : 'border border-white/20 hover:border-accent hover:text-accent'
                        }`}
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], parseInt(e.target.value)]);
                        setCurrentPage(1);
                      }}
                      className="h-1 w-full appearance-none bg-white/10 outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {paginatedProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-xl text-muted-foreground">No products found</p>
          </motion.div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="border border-white/20 px-6 py-3 text-sm uppercase tracking-wider transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-foreground"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  >
                    Previous
                  </button>

                  <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-12 w-12 text-sm transition-all ${
                          currentPage === page
                            ? 'bg-accent text-background'
                            : 'border border-white/20 hover:border-accent hover:text-accent'
                        }`}
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="border border-white/20 px-6 py-3 text-sm uppercase tracking-wider transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-foreground"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
