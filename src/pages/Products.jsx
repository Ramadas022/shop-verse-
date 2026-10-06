import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

import "./Products.css";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchTerm.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, category, sortBy]);

  return (
    <main className="products-page">

      {/* Header */}

      <section className="products-header">

        <div>
          <p className="section-label">
            OUR COLLECTION
          </p>

          <h1>Shop All Products</h1>

          <p>
            Discover products selected for your everyday style.
          </p>
        </div>

      </section>


      {/* Controls */}

      <section className="products-controls">

        {/* Search */}

        <div className="search-box">

          <Search size={19} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>


        {/* Category */}

        <div className="filter-control">

          <SlidersHorizontal size={18} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>


        {/* Sort */}

        <select
          className="sort-control"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">
            Sort By
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>

      </section>


      {/* Results */}

      <section className="products-results">

        <div className="results-info">

          <span>
            {filteredProducts.length} products
          </span>

          {category !== "All" && (
            <span>
              Category: {category}
            </span>
          )}

        </div>


        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="no-products">

            <h2>No products found</h2>

            <p>
              Try changing your search or filter.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setCategory("All");
                setSortBy("default");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Products;