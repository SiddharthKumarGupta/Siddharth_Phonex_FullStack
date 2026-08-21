import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

import { getProducts } from "../services/productService";


const Mobile = () => {

  const [mobiles, setMobiles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchMobiles = async () => {

      try {

        const products = await getProducts();


        // Only mobile products

        const mobileProducts = products.filter(

          (product) =>

            product.category.toLowerCase() === "mobile"

        );


        setMobiles(mobileProducts);


      } catch (error) {

        console.error(
          "Error fetching mobile products:",
          error
        );

        setError(
          "Failed to load mobile products"
        );


      } finally {

        setLoading(false);

      }

    };


    fetchMobiles();

  }, []);


  if (loading) {

    return (

      <div className="container py-5 text-center">

        <h3>
          Loading smartphones...
        </h3>

      </div>

    );

  }


  if (error) {

    return (

      <div className="container py-5 text-center">

        <h3 className="text-danger">

          {error}

        </h3>

      </div>

    );

  }


  return (

    <div className="container py-5">


      <div className="text-center mb-5">

        <h1 className="fw-bold">

          📱 Smartphones

        </h1>


        <p className="text-muted">

          Premium Apple, Samsung, OnePlus, Google and more

        </p>

      </div>


      <div className="row">

        {mobiles.length > 0 ? (

          mobiles.map((mobile) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={mobile.id}
            >

              <ProductCard
                product={mobile}
              />

            </div>

          ))

        ) : (

          <div className="text-center">

            <h4>
              No mobile products available
            </h4>

          </div>

        )}

      </div>


    </div>

  );

};


export default Mobile;