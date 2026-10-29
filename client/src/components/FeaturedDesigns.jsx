import featured1 from "../assets/images/featured1.jpg";
import featured2 from "../assets/images/featured2.jpg";
import featured3 from "../assets/images/featured3.jpg";

const designs = [
  {
    title: "Scandinavian Living",
    category: "Living Room",
    description:
      "Warm wood, soft textures, and natural light create a calm and inviting atmosphere.",
    image: featured1,
  },
  {
    title: "Modern Serenity",
    category: "Bedroom",
    description:
      "Neutral tones, layered fabrics, and thoughtful lighting create a peaceful retreat.",
    image: featured2,
  },
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    description:
      "Clean lines, refined finishes, and practical details bring modern elegance into the kitchen.",
    image: featured3,
  },
];

function FeaturedDesigns() {
  return (
    <section
      id="gallery"
      style={{
        background: "#F7F2EC",
        padding: "110px 70px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <p
          style={{
            color: "#9A6845",
            fontSize: "14px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          Our Inspiration
        </p>

        <h2
          style={{
            color: "#4A3428",
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "18px",
          }}
        >
          Featured Designs
        </h2>

        <p
          style={{
            color: "#7A6B5F",
            fontSize: "18px",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          A collection of thoughtfully designed spaces to inspire your next
          home transformation.
        </p>
      </div>

      {/* Designs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {designs.map((design) => (
          <DesignCard key={design.title} design={design} />
        ))}
      </div>
    </section>
  );
}

function DesignCard({ design }) {
  return (
    <div
      style={{
        background: "#FFFDF9",
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(74,52,40,0.12)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 20px 45px rgba(74,52,40,0.20)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(74,52,40,0.12)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "320px",
          overflow: "hidden",
        }}
      >
        <img
          src={design.image}
          alt={design.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "28px",
        }}
      >
        <p
          style={{
            color: "#9A6845",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {design.category}
        </p>

        <h3
          style={{
            color: "#4A3428",
            fontSize: "27px",
            marginBottom: "12px",
          }}
        >
          {design.title}
        </h3>

        <p
          style={{
            color: "#7A6B5F",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "22px",
          }}
        >
          {design.description}
        </p>

        <button
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            color: "#8B5E3C",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          View Inspiration →
        </button>
      </div>
    </div>
  );
}

export default FeaturedDesigns;