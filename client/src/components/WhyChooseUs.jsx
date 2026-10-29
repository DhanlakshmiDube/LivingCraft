const features = [
  {
    icon: "🏆",
    title: "Expert Designers",
    description:
      "Creative professionals dedicated to transforming your ideas into beautiful spaces.",
  },
  {
    icon: "🎨",
    title: "Personalized Designs",
    description:
      "Every room is designed to match your lifestyle, personality, and preferences.",
  },
  {
    icon: "🌿",
    title: "Sustainable Materials",
    description:
      "Thoughtfully selected materials that combine elegance with environmental responsibility.",
  },
  {
    icon: "⭐",
    title: "Premium Quality",
    description:
      "Attention to every detail ensures timeless interiors you'll love for years.",
  },
];

function WhyChooseUs() {
  return (
    <section
      style={{
        background: "#EFE5DA",
        padding: "110px 70px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 65px",
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
          The LivingCraft Difference
        </p>

        <h2
          style={{
            color: "#4A3428",
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "18px",
          }}
        >
          Why Choose LivingCraft?
        </h2>

        <p
          style={{
            color: "#7A6B5F",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          We combine creativity, functionality, and thoughtful design to
          create spaces that truly feel like home.
        </p>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              background: "#FFFDF9",
              borderRadius: "22px",
              padding: "40px 30px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(74,52,40,0.10)",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 18px 40px rgba(74,52,40,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(74,52,40,0.10)";
            }}
          >
            <div
              style={{
                width: "75px",
                height: "75px",
                margin: "0 auto 25px",
                borderRadius: "50%",
                background: "#EFE5DA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
              }}
            >
              {feature.icon}
            </div>

            <h3
              style={{
                color: "#4A3428",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                color: "#7A6B5F",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;