function Footer() {
  return (
    <footer
      style={{
        background: "#3B2920",
        color: "#F7F2EC",
        padding: "80px 70px 25px",
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "50px",
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "18px",
              fontWeight: "600",
            }}
          >
            LivingCraft
          </h2>

          <p
            style={{
              color: "#D8C9BB",
              lineHeight: "1.8",
              maxWidth: "350px",
              fontSize: "15px",
            }}
          > 
            Crafting beautiful, warm, and meaningful spaces that feel
            uniquely yours.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 style={{ fontSize: "17px", marginBottom: "22px" }}>
            Explore
          </h3>

          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Home
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Rooms
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Gallery
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Contact
          </p>
        </div>

        {/* Spaces */}
        <div>
          <h3 style={{ fontSize: "17px", marginBottom: "22px" }}>
            Spaces
          </h3>

          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Living Room
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Bedroom
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Kitchen
          </p>
          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            Bathroom
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontSize: "17px", marginBottom: "22px" }}>
            Get In Touch
          </h3>

          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}>
            📧 hello@livingcraft.com
          </p>

          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}> 
            📞 +91 98765 43210
          </p>

          <p style={{ color: "#D8C9BB", marginBottom: "13px" }}> 
            📍 Indore, India
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto 0",
          paddingTop: "25px",
          borderTop: "1px solid rgba(255,255,255,0.15)", 
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#BFAFA1",
            fontSize: "13px",
            margin: 0,
          }}
        >
          © 2026 LivingCraft. Crafted with care. 
        </p>

        <p
          style={{
            color: "#BFAFA1",
            fontSize: "13px",
            marginTop: "8px",
          }}
        >
          Interior inspiration for modern living. 
        </p>
      </div>
    </footer>
  );
}

export default Footer;