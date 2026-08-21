import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const data = await getProducts();

        const accessoryProducts = data.filter(
          (product) =>
            product.category.toLowerCase() === "accessories"
        );

        setAccessories(accessoryProducts);
      } catch (error) {
        console.error("Error fetching accessories products:", error);
        setError("Failed to load accessories");
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading accessories...</h3>
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

      <div className="text-center mb-5">
        <h1 className="fw-bold">
          🎧 Premium Accessories
        </h1>

        <p className="text-muted">
          Earbuds • Chargers • Headphones • Power Banks • Smart Accessories
        </p>
      </div>

      {accessories.length === 0 ? (
        <div className="text-center">
          <h4>No accessories available</h4>
        </div>
      ) : (
        <div className="row">

          {accessories.map((item) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={item.id}
            >
              <ProductCard product={item} />
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Accessories;