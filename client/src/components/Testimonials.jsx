const testimonials = [
  {
    quote:
      "LivingCraft completely transformed our home. Every detail feels intentional, beautiful, and perfectly suited to us.",
    name: "Aarav Mehta",
    role: "Homeowner",
  },
  {
    quote:
      "The team understood exactly what we wanted. Our living space now feels warm, elegant, and truly ours.",
    name: "Priya Sharma",
    role: "Homeowner",
  },
  {
    quote:
      "From the first idea to the final design, the entire experience was effortless. The result exceeded our expectations.",
    name: "Rohan Kapoor",
    role: "Homeowner",
  },
];

function Testimonials() {
  return (
    <section
      style={{
        background: "#F7F2EC",
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
          Client Stories
        </p>

        <h2
          style={{
            color: "#4A3428",
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "18px",
          }}
        >
          What Our Clients Say
        </h2>

        <p
          style={{
            color: "#7A6B5F",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Real spaces, real experiences, and a whole lot of love for
          thoughtful design.
        </p>
      </div>

      {/* Testimonials */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            style={{
              background: "#FFFDF9",
              padding: "40px 35px",
              borderRadius: "22px",
              boxShadow: "0 10px 30px rgba(74,52,40,0.10)",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              position: "relative",
              overflow: "hidden",
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
            {/* Quote mark */}
            <div
              style={{
                color: "#B98A63",
                fontSize: "64px",
                lineHeight: "0.8",
                fontFamily: "Georgia, serif",
                marginBottom: "25px",
              }}
            >
              “
            </div>

            <p
              style={{
                color: "#5E5047",
                fontSize: "16px",
                lineHeight: "1.8",
                fontStyle: "italic",
                marginBottom: "30px",
              }}
            >
              {testimonial.quote}
            </p>

            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#B98A63",
                marginBottom: "18px",
              }}
            />

            <h3
              style={{
                color: "#4A3428",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              {testimonial.name}
            </h3>

            <p
              style={{
                color: "#9A6845",
                fontSize: "14px",
                margin: 0,
              }}
            >
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;