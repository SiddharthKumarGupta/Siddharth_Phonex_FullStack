import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const TV = () => {
  const [tvs, setTvs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTVs = async () => {
      try {
        const data = await getProducts("tv");
        console.log("TV PRODUCTS:", data);
        setTvs(data);
      } catch (error) {
        console.error("Error fetching TV products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTVs();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading TVs...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">
        📺 Premium Smart TVs
      </h2>

      <div className="row">
        {tvs.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TV;