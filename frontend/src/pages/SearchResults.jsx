import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);

        const response = await getProducts();

        console.log("PRODUCTS FROM API:", response);

        const productList = Array.isArray(response)
          ? response
          : response.results || response.data || [];

        console.log("FIRST PRODUCT:", productList[0]);

        // Search aliases
        const searchAliases = {
          mobile: [
            "mobile",
            "mobiles",
            "phone",
            "phones",
            "smartphone",
            "smartphones",
          ],

          mobiles: [
            "mobile",
            "mobiles",
            "phone",
            "phones",
            "smartphone",
            "smartphones",
          ],

          phone: [
            "mobile",
            "mobiles",
            "phone",
            "phones",
            "smartphone",
            "smartphones",
          ],

          phones: [
            "mobile",
            "mobiles",
            "phone",
            "phones",
            "smartphone",
            "smartphones",
          ],

          laptop: ["laptop", "laptops"],
          laptops: ["laptop", "laptops"],

          tablet: ["tablet", "tablets"],
          tablets: ["tablet", "tablets"],

          apple: ["apple", "iphone", "ipad", "macbook"],
          iphone: ["iphone", "apple"],
        };

        const query = searchQuery.toLowerCase().trim();

        const searchTerms = searchAliases[query] || [query];

        // IMPORTANT: filteredProducts is defined here
        const filteredProducts = productList.filter((product) => {
          const searchableText = `
            ${product.name || ""}
            ${product.title || ""}
            ${product.category || ""}
            ${product.brand || ""}
            ${product.description || ""}
            ${product.slug || ""}
          `.toLowerCase();

          return searchTerms.some((term) =>
            searchableText.includes(term)
          );
        });

        console.log("FILTERED PRODUCTS:", filteredProducts);

        setProducts(filteredProducts);

      } catch (error) {
        console.error("Search error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery.trim()) {
      fetchSearchResults();
    } else {
      setProducts([]);
      setLoading(false);
    }

  }, [searchQuery]);

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        Search Results for:{" "}
        <strong>{searchQuery}</strong>
      </h2>

      {loading && (
        <div className="text-center">
          <p>Searching products...</p>
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="text-center py-5">
          <h4>No products found</h4>

          <p>
            No products matched your search for "{searchQuery}".
          </p>
        </div>
      )}

      {!loading && products.length > 0 && (
        <div className="row">

          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default SearchResults;