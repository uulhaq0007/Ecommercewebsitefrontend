import { Link, Outlet } from 'react-router';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                NOVO
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium products for discerning customers. Curated with care.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Shop
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-accent">All Products</Link></li>
                <li><Link to="/products?category=Electronics" className="hover:text-accent">Electronics</Link></li>
                <li><Link to="/products?category=Clothing" className="hover:text-accent">Clothing</Link></li>
                <li><Link to="/products?category=Shoes" className="hover:text-accent">Shoes</Link></li>
                <li><Link to="/products?category=Accessories" className="hover:text-accent">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Support
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent">Shipping Info</a></li>
                <li><a href="#" className="hover:text-accent">Returns</a></li>
                <li><a href="#" className="hover:text-accent">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 NOVO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
