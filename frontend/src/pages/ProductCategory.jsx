import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const ProductCategory = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await getProducts();

        const filteredProducts = response.filter(
          (product) => product.category === category
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading products...</h3>;
  }

  if (error) {
    return <h3 className="text-center mt-5 text-danger">{error}</h3>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">{title}</h2>

      {products.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;