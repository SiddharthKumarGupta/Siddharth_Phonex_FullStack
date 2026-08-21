import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const data = await getProducts();

        const laptopProducts = data.filter(
          (product) =>
            product.category.toLowerCase() === "laptop"
        );

        setLaptops(laptopProducts);
      } catch (error) {
        console.error("Error fetching laptop products:", error);
        setError("Failed to load laptop products");
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading laptops...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">{error}</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4 text-center">
        💻 Premium Laptops
      </h2>

      {laptops.length === 0 ? (
        <div className="text-center">
          <h4>No laptops available</h4>
        </div>
      ) : (
        <div className="row">

          {laptops.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
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

export default Laptops;