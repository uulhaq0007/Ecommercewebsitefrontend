import { Link } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const featuredProducts = products.filter(p => p.featured);
  const categoryProducts = categories.slice(1).map(category => ({
    category,
    product: products.find(p => p.category === category)
  }));

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-block border border-accent/30 bg-accent/10 px-4 py-2"
            >
              <span className="text-xs uppercase tracking-widest text-accent" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Spring Collection 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-7xl leading-[0.9] tracking-tighter sm:text-8xl lg:text-9xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ELEVATE YOUR STYLE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 max-w-2xl text-xl leading-relaxed text-muted-foreground"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Discover our curated collection of premium products designed for those who demand excellence. From cutting-edge electronics to timeless fashion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center space-x-3 bg-accent px-8 py-4 text-background transition-all hover:bg-accent/90"
                >
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Shop Now
                  </span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <Link to="/products?category=Electronics">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white/20 px-8 py-4 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Explore Tech
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Zap, title: 'Fast Delivery', desc: 'Same-day shipping on all orders' },
              { icon: Shield, title: 'Secure Payment', desc: 'Protected by industry-leading encryption' },
              { icon: Truck, title: 'Free Returns', desc: '30-day hassle-free return policy' }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="mb-4 text-5xl tracking-tighter sm:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FEATURED
            </h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked premium products just for you
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="mb-4 text-5xl tracking-tighter sm:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SHOP BY CATEGORY
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categoryProducts.map((item, index) => item.product && (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${item.category}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-card">
                    <img
                      src={item.product.image}
                      alt={item.category}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3
                        className="text-3xl tracking-tighter transition-colors group-hover:text-accent"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.category.toUpperCase()}
                      </h3>
                      <div className="mt-2 flex items-center space-x-2 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                          Explore
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
