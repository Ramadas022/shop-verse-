import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";


import { useCart } from "../Context/CartContext";

import products from "../data/products";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product not found
  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link to="/products">
          Back to Products
        </Link>
      </main>
    );
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  return (
    <main className="product-details-page">

      {/* Back */}

      <Link to="/products" className="back-link">
        <ArrowLeft size={17} />
        Back to Products
      </Link>


      {/* Product */}

      <section className="product-details">

        {/* Image */}

        <div className="details-image-container">

          {product.badge && (
            <span className="details-badge">
              {product.badge}
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="details-image"
          />

        </div>


        {/* Information */}

        <div className="details-info">

          <p className="details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>


          {/* Rating */}

          <div className="details-rating">

            <div className="stars">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill={
                    star <= Math.round(product.rating)
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}

            </div>

            <span>
              {product.rating}
            </span>

            <span className="review-text">
              ({product.reviews} reviews)
            </span>

          </div>


          {/* Price */}

          <div className="details-price">

            <span className="details-current-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="details-old-price">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>

            <span className="discount">
              {discount}% OFF
            </span>

          </div>


          {/* Description */}

          <p className="details-description">
            Designed for everyday comfort and modern style.
            This carefully selected product combines quality,
            functionality and timeless design.
          </p>


          <div className="details-divider" />


          {/* Quantity */}

          <div className="quantity-section">

            <span>Quantity</span>

            <div className="quantity-control">

              <button onClick={decreaseQuantity}>
                <Minus size={16} />
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                <Plus size={16} />
              </button>

            </div>

          </div>

<button
  className="add-cart-btn"
  onClick={() => addToCart(product, quantity)}
>
  <ShoppingCart size={20} />
  Add to Cart
</button>

          {/* Actions */}

          <div className="details-actions">

            <button className="add-cart-btn">
              <ShoppingCart size={19} />
              Add to Cart
            </button>

            <button
              className={`wishlist-detail-btn ${
                isWishlisted ? "active" : ""
              }`}
              onClick={() =>
                setIsWishlisted(!isWishlisted)
              }
            >
              <Heart
                size={20}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          <button className="buy-now-btn">
            Buy Now
          </button>


          {/* Product info */}

          <div className="product-info-list">

            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong className="available">
                In Stock
              </strong>
            </div>

            <div>
              <span>Shipping</span>
              <strong>
                Free delivery available
              </strong>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;