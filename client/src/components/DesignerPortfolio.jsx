
import { useState } from "react";
import featured1 from "../assets/images/featured1.jpg";
import featured2 from "../assets/images/featured2.jpg";
import featured3 from "../assets/images/featured3.jpg";

const designs = [
  {
    id: 1,
    title: "Scandinavian Living",
    category: "Living Room",
    style: "Scandinavian",
    description:
      "A warm, welcoming living room with natural textures, soft colours and beautiful wooden details.",
    budget: "₹50,000 – ₹1,50,000",
    image: featured1,
  },
  {
    id: 2,
    title: "Modern Serenity",
    category: "Bedroom",
    style: "Modern",
    description:
      "A peaceful bedroom with soothing neutral tones and comfortable fabrics.",
    budget: "₹40,000 – ₹1,20,000",
    image: featured2,
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Kitchen",
    style: "Contemporary",
    description:
      "A functional kitchen with clean lines, thoughtful storage and elegant finishes.",
    budget: "₹80,000 – ₹2,50,000",
    image: featured3,
  },
];

const filters = ["All", "Living Room", "Bedroom", "Kitchen"];

export default function DesignerPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns =
    activeFilter === "All"
      ? designs
      : designs.filter((design) => design.category === activeFilter);

  const buttonStyle = {
    padding: "12px 18px",
    border: "none",
    borderRadius: 7,
    background: "#6D4934",
    color: "#F7F2EC",
    fontWeight: 600,
    cursor: "pointer",
  };

  return (
    <section
      id="designer-portfolio"
      style={{
        background: "#F7F2EC",
        color: "#4A3428",
        padding: "65px 6%",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 35 }}>
        <p style={{ color: "#8B5E3C", letterSpacing: 3, fontSize: 12 }}>
          FIND YOUR INSPIRATION
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
          Designer Portfolio
        </h2>
        <p>Explore designs and discover ideas for your home.</p>
      </header>

      <nav
        aria-label="Filter designs"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginBottom: 35,
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: "10px 18px",
              borderRadius: 25,
              border: "1px solid #8B5E3C",
              background:
                activeFilter === filter ? "#8B5E3C" : "#EDE3D8",
              color: activeFilter === filter ? "#F7F2EC" : "#4A3428",
              cursor: "pointer",
            }}
          >
            {filter}
          </button>
        ))}
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 25,
        }}
      >
        {filteredDesigns.map((design) => (
          <article
            key={design.id}
            style={{
              background: "#EDE3D8",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid #D8C6B5",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedDesign(design)}
              aria-label={`Open details for ${design.title}`}
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <img
                src={design.image}
                alt={design.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                }}
              />
            </button>

            <div style={{ padding: 20 }}>
              <p style={{ color: "#8B5E3C", fontSize: 12 }}>
                {design.category} · {design.style}
              </p>
              <h3>{design.title}</h3>
              <p style={{ lineHeight: 1.6, color: "#78675A" }}>
                {design.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedDesign(design)}
                style={{ ...buttonStyle, width: "100%" }}
              >
                View Design →
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedDesign && (
        <div
          onClick={() => setSelectedDesign(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(35, 25, 19, 0.78)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-design-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 560,
              maxHeight: "90vh",
              overflowY: "auto",
              boxSizing: "border-box",
              padding: 24,
              borderRadius: 16,
              background: "#F7F2EC",
              color: "#4A3428",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              aria-label="Close details"
              style={{
                ...buttonStyle,
                position: "absolute",
                top: 12,
                right: 12,
                padding: "6px 12px",
                fontSize: 20,
              }}
            >
              ×
            </button>

            <img
              src={selectedDesign.image}
              alt={selectedDesign.title}
              style={{
                width: "100%",
                height: 250,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <p style={{ color: "#8B5E3C" }}>
              {selectedDesign.category} · {selectedDesign.style}
            </p>
            <h2 id="selected-design-title">{selectedDesign.title}</h2>
            <p style={{ lineHeight: 1.8 }}>
              {selectedDesign.description}
            </p>

            <div
              style={{
                padding: 16,
                borderRadius: 10,
                background: "#EDE3D8",
                marginTop: 18,
              }}
            >
              <strong>Estimated budget</strong>
              <p>{selectedDesign.budget}</p>
              <small>
                Indicative estimate only. Actual costs depend on room size,
                materials, furniture and labour.
              </small>
            </div>

            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              style={{ ...buttonStyle, width: "100%", marginTop: 18 }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
