import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        minHeight: "700px",
        position: "relative",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#FFFDF9",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(45, 30, 22, 0.48), rgba(45, 30, 22, 0.62))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "950px",
          padding: "40px 30px",
          marginTop: "60px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "#E5D2BE",
          }}
        >
          Interior Inspiration
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 6vw, 82px)",
            lineHeight: "1.05",
            marginBottom: "28px",
            fontWeight: "700",
            letterSpacing: "-2px",
            textShadow: "0 5px 20px rgba(0,0,0,0.3)",
          }}
        >
          Craft Your Dream
          <br />
          Living Space
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            maxWidth: "750px",
            margin: "0 auto 40px",
            color: "#F5EDE5",
          }}
        >
          Discover beautiful interiors inspired by IKEA, Livspace, and
          Pinterest. Transform your home into a space you'll love with
          elegant and modern furniture ideas.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#rooms"
            style={{
              background: "#9A6845",
              color: "#FFFDF9",
              padding: "17px 34px",
              borderRadius: "35px",
              fontSize: "17px",
              fontWeight: "600",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            Explore Designs
          </a>

          <a
            href="#contact"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#FFFDF9",
              padding: "16px 34px",
              borderRadius: "35px",
              fontSize: "17px",
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;