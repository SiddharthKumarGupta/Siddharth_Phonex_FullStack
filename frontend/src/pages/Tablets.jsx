import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const Tablets = () => {
  const [tablets, setTablets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTablets = async () => {
      try {
        const data = await getProducts("tablet");
        setTablets(data);
      } catch (error) {
        console.error("Error fetching tablets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTablets();
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading tablets...</h3>;
  }

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">📱 Premium Tablets</h1>

        <p className="text-muted">
          Apple • Samsung • Xiaomi • Lenovo • OnePlus
        </p>
      </div>

      <div className="row">
        {tablets.map((tablet) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={tablet.id}
          >
            <ProductCard product={tablet} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tablets;