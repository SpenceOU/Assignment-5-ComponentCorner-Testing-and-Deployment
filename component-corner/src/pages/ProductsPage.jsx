import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <div className="page">
      <h2 className="section-title">Halo Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;