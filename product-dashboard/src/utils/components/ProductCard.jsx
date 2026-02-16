// Presentational: Skeleton UI
export const SkeletonCard = () => (
  <div style={{ padding: '20px', border: '1px solid #eee', marginBottom: '10px', borderRadius: '8px', background: '#fafafa', animate: 'pulse 1.5s infinite' }}>
    <div style={{ height: '20px', background: '#ddd', width: '60%', marginBottom: '10px' }}></div>
    <div style={{ height: '15px', background: '#eee', width: '40%' }}></div>
  </div>
);

// Presentational: Product UI
export const ProductCard = ({ title, price, category }) => (
  <div style={{ padding: '20px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '8px' }}>
    <h3>{title}</h3>
    <p>Category: {category} | <strong>${price}</strong></p>
  </div>
);