import "./../assets/css/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <img
        src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2000"
        alt="iPhone 16 Pro"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-badge">
          NEW ARRIVAL
        </span>

        <h1>
          iPhone 16 Pro
        </h1>

        <p className="hero-tagline">
          Bring an extra sparkle to your festive cheer.
        </p>

        <p className="hero-offer">
          ₹4,000 Instant Cashback
          <span>|</span>
          Exchange Bonus ₹6,000
        </p>

        <div className="hero-buttons">

          <button className="cart-btn">
            Add to Cart
          </button>

          <button className="learn-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;