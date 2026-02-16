import { useState, useEffect } from 'react';
import { ProductCard, SkeletonCard } from './components/ProductCard';
import trackFetch from './utils/tracker';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Using Async/Await within a Promise Chain context
    const getProducts = async () => {
      try {
        trackFetch(); // Trigger our closure tracker
        
        const response = await fetch('https://dummyjson.com/products?limit=5');
        const data = await response.json();
        
        // Artificial delay to observe Skeleton UI
        setTimeout(() => {
          setProducts(data.products);
          setLoading(false);
        }, 2000);
        
      } catch (error) {
        console.error("Fetch failed:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Product Catalog</h1>
      <hr />
      
      {loading ? (
        // Render Skeleton UI while loading
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        // Render deterministic UI components
        products.map(item => (
          <ProductCard 
            key={item.id} 
            title={item.title} 
            price={item.price} 
            category={item.category} 
          />
        ))
      )}
    </div>
  );
}

export default App;