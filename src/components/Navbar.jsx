import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import "./Navbar.css";
import { useCart } from "../Context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          SHOP<span>VERSE</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/products">New Arrivals</Link>
          <Link to="/products">Categories</Link>
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          <button className="nav-icon search-btn">
            <Search size={20} />
          </button>

          <Link to="/wishlist" className="nav-icon">
            <Heart size={20} />
            <span className="badge">0</span>
          </Link>

          <Link to="/cart" className="nav-icon">
            <ShoppingCart size={20} />
            <span className="badge">{cartCount}</span>
          </Link>

          <Link to="/login" className="nav-icon">
            <User size={20} />
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;