
import { useState } from "react";

const products = [
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

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
            lineHeight: "1.2",
            margin: "12px 0",
            fontWeight: "600",
          }}
        >
          Interior Product Explorer
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#7A6B5F",
            lineHeight: "1.7",
            maxWidth: "540px",
            margin: "0 auto 32px",
          }}
        >
          Thoughtful pieces, warm spaces, and little details
          that make a house feel like home.
        </p>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search furniture and décor..."
          aria-label="Search products"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "500px",
            boxSizing: "border-box",
            margin: "0 auto 25px",
            padding: "15px 18px",
            border: "1px solid #D8C9BB",
            borderRadius: "12px",
            background: "#FFFDF9",
            color: "#4A3428",
            fontSize: "15px",
            outlineColor: "#A67C52",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              style={{
                padding: "10px 19px",
                borderRadius: "30px",
                border:
                  selectedCategory === category
                    ? "1px solid #8B5E3C"
                    : "1px solid #D8C9BB",
                background:
                  selectedCategory === category
                    ? "#8B5E3C"
                    : "#FFFDF9",
                color:
                  selectedCategory === category
                    ? "#FFFFFF"
                    : "#6B5140",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight:
                  selectedCategory === category ? "600" : "400",
                transition: "background 0.2s ease",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "26px",
            alignItems: "stretch",
          }}
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                background: "#FFFDF9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #E8DED3",
                boxShadow: "0 5px 18px rgba(74, 52, 40, 0.05)",
                transition: "box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  height: "230px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, #EDE3D8, #F7F2EC)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "22px",
                }}
              >
                <p
                  style={{
                    color: "#A67C52",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    margin: "0 0 8px",
                  }}
                >
                  {product.category}
                </p>

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "20px",
                    lineHeight: "1.35",
                    fontWeight: "600",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#7A6B5F",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: "0 0 18px",
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: "0 0 18px",
                    color: "#4A3428",
                  }}
                >
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <a
                  href={product.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px 12px",
                    borderRadius: "9px",
                    background: "#8B5E3C",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Explore on IKEA India ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p
            role="status"
            style={{
              textAlign: "center",
              padding: "30px",
              color: "#7A6B5F",
            }}
          >
            No products found. Try another search.
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
          Sample catalogue for demonstration. Prices are
          illustrative, not verified live IKEA prices.
          Images are illustrative and may not depict the exact
          listed product. Check the retailer's website for
          current prices and availability.
        </p>
      </div>
    </section>
  );
}

export default ProductExplorer;
