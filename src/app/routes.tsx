import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'product/:id', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: '*', Component: () => (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-6xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
            <p className="text-muted-foreground">Page not found</p>
          </div>
        </div>
      )}
    ]
  }
], {
  basename: import.meta.env.BASE_URL,
});
