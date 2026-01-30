import { useEffect, useState } from 'react'
import './PremiumProducts.css'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const PremiumProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        // Filtering the premium products
        const premiumProducts = data.filter(
          (product) =>
            product.rating
            && product.rating.rate >= 4
            && product.rating.count >= 100
        );
        setProducts(premiumProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="premium-products">
        <div className="loading">
          <h2>Loading Premium Products...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="premium-products">
        <div className="error">
          <h2>Error Loading Products</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-products">
      <div className="products-header">
        <h2>Premium Products</h2>
        <p>High-rated products from our exclusive collection</p>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price ($)</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="product-title">{product.title}</td>
                <td className="product-price">${product.price}</td>
                <td className="product-rating">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </td>
                <td className="product-category">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && !loading && (
        <div className="no-products">
          <p>No premium products found matching the criteria.</p>
        </div>
      )}
    </div>
  )
}

export default PremiumProducts