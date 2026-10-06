import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-container">

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <button className="wishlist-btn">
          <Heart size={19} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button className="quick-cart">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="product-rating">
          <Star size={15} fill="currentColor" />

          <span>{product.rating}</span>

          <span className="review-count">
            ({product.reviews})
          </span>
        </div>

        <div className="product-price">

          <span className="current-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="old-price">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;