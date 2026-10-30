import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";

const initialProducts = [
  {
    id: 1,
    name: "LACK Side Table",
    category: "Tables",
    price: 799,
    description: "A simple, versatile table for your living space.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=LACK%20side%20table",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Minimalist table in a home interior",
  },
  {
    id: 2,
    name: "BILLY Bookcase",
    category: "Storage",
    price: 4990,
    description: "A classic bookcase for books and decorative pieces.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=BILLY%20bookcase",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Books arranged on a bookshelf",
  },
  {
    id: 3,
    name: "FADO Table Lamp",
    category: "Lighting",
    price: 1499,
    description: "Soft lighting for a cosy interior.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=FADO%20lamp",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Decorative lamp creating warm ambient lighting",
  },
  {
    id: 4,
    name: "KALLAX Shelving Unit",
    category: "Storage",
    price: 3990,
    description: "Open shelving for organising your home.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=KALLAX",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Organised shelving in a modern interior",
  },
  {
    id: 5,
    name: "Dining Table",
    category: "Tables",
    price: 5990,
    description: "Explore dining tables for everyday living.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=dining%20table",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Dining furniture in a contemporary home",
  },
  {
    id: 6,
    name: "Decorative Cushion",
    category: "Decor",
    price: 499,
    description: "Add a finishing touch to your sofa or bed.",
    searchUrl: "https://www.ikea.com/in/en/search/?q=cushion",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Soft furnishings and home decor",
  },
];

const categories = ["All", "Tables", "Storage", "Lighting", "Decor"];

function ProductExplorer() {
  const [productsList, setProductsList] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetchProducts()
      .then((res) => {
        if (isMounted && res?.data && Array.isArray(res.data) && res.data.length > 0) {
          setProductsList(res.data);
        }
      })
      .catch((err) => {
        // Silently use initialProducts if backend product catalog is not reachable
        console.log("Using cached product catalog:", err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = productsList.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(searchText) ||
      product.category?.toLowerCase().includes(searchText) ||
      product.description?.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="products"
      style={{
        padding: "clamp(48px, 7vw, 88px) 6%",
        background: "#F7F2EC",
        color: "#4A3428",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "#A67C52",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Curated for Your Home
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 40px)",
            margin: "12px 0",
          }}
        >
          Product Explorer
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#7A6B5F",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}
        >
          Browse furniture and accessories to complement your interior.
          Filter by category or search by keyword.
        </p>

        {/* Filter controls */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "1px solid",
                  borderColor:
                    selectedCategory === category ? "#8B5E3C" : "#D8C9BB",
                  background:
                    selectedCategory === category ? "#8B5E3C" : "#FFFDF9",
                  color:
                    selectedCategory === category ? "#FFFDF9" : "#4A3428",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "9px 18px",
              borderRadius: "20px",
              border: "1px solid #D8C9BB",
              background: "#FFFDF9",
              color: "#4A3428",
              fontSize: "14px",
              outline: "none",
              minWidth: "220px",
            }}
          />
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "28px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product._id || product.id}
              style={{
                background: "#FFFDF9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #E8DED3",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  background: "#EFE5DA",
                }}
              >
                <img
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      color: "#A67C52",
                      fontWeight: "700",
                    }}
                  >
                    {product.category}
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      color: "#4A3428",
                    }}
                  >
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "17px",
                    margin: "0 0 8px",
                    fontWeight: "600",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#7A6B5F",
                    lineHeight: "1.6",
                    margin: "0 0 16px",
                    flexGrow: 1,
                  }}
                >
                  {product.description}
                </p>

                {product.searchUrl && (
                  <a
                    href={product.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      border: "1px solid #D8C9BB",
                      background: "#FDF9F4",
                      color: "#8B5E3C",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    View on Retailer →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#7A6B5F",
              marginTop: "40px",
              fontSize: "16px",
            }}
          >
            No products match your search or selected filter.
          </p>
        )}

        <p
          style={{
            textAlign: "center",
            color: "#7A6B5F",
            fontSize: "12px",
            lineHeight: "1.7",
            marginTop: "30px",
          }}
        >
          Sample catalogue integrated with LivingCraft backend API. Prices and
          images are illustrative.
        </p>
      </div>
    </section>
  );
}

export default ProductExplorer;
