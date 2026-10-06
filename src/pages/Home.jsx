import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products"

import "./Home.css";

function Home() {

  const featuredProducts = products.slice(0, 4);

  return (
    <main>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            NEW SEASON 2026
          </p>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style.</span>
          </h1>

          <p className="hero-description">
            Discover carefully selected fashion and lifestyle
            products designed for modern everyday living.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link to="/products" className="secondary-btn">
              Explore Collection
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <img src="/src/assets/hero.png" alt="Shopping collection" />
        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section">

        <div className="section-header">

          <div>
            <p className="section-label">
              SHOP BY CATEGORY
            </p>

            <h2>
              Find what fits you
            </h2>
          </div>

          <Link to="/products" className="view-all">
            View All
            <ArrowRight size={17} />
          </Link>

        </div>


        <div className="category-grid">

          <Link to="/products?category=men" className="category-card">
            <div>
              <span>01</span>
              <h3>Men</h3>
              <p>Modern essentials</p>
            </div>
            <ArrowRight />
          </Link>

          <Link to="/products?category=women" className="category-card">
            <div>
              <span>02</span>
              <h3>Women</h3>
              <p>Style & elegance</p>
            </div>
            <ArrowRight />
          </Link>

          <Link to="/products?category=shoes" className="category-card">
            <div>
              <span>03</span>
              <h3>Shoes</h3>
              <p>Step up your game</p>
            </div>
            <ArrowRight />
          </Link>

          <Link to="/products?category=accessories" className="category-card">
            <div>
              <span>04</span>
              <h3>Accessories</h3>
              <p>Complete your look</p>
            </div>
            <ArrowRight />
          </Link>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="section featured-section">

        <div className="section-header">

          <div>
            <p className="section-label">
              HANDPICKED FOR YOU
            </p>

            <h2>
              Featured Products
            </h2>
          </div>

          <Link to="/products" className="view-all">
            View All
            <ArrowRight size={17} />
          </Link>

        </div>


        <div className="product-grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* PROMOTION */}

      <section className="promo-section">

        <div className="promo-content">

          <p className="section-label">
            LIMITED TIME OFFER
          </p>

          <h2>
            Upgrade your
            <br />
            everyday essentials.
          </h2>

          <p>
            Get up to 40% off selected products.
            Limited quantities available.
          </p>

          <Link to="/products" className="primary-btn">
            Shop Deals
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;