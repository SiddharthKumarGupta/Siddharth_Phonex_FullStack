import "./../assets/css/premiumDeals.css";

const deals = [
  {
    id: 1,
    title: "Tablets, Smartphones & More",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
  },
  {
    id: 2,
    title: "Catch Big Deals on Smart Watches",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200",
  },
  {
    id: 3,
    title: "Premium Laptops Collection",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  },
];

const PremiumDeals = () => {
  return (
    <section className="premium-section">

      <div className="container">

        <div className="section-heading">

          <span>TOP DEALS</span>

          <h2>Premium Collections</h2>

          <p>
            Discover flagship smartphones, smart wearables,
            premium laptops and accessories.
          </p>

        </div>

        <div className="premium-grid">

          {deals.map((deal) => (

            <div className="premium-card" key={deal.id}>

              <img src={deal.image} alt={deal.title} />

              <div className="premium-overlay">

                <h3>{deal.title}</h3>

                <button>
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PremiumDeals;