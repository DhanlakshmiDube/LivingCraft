function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 70px",
        background: "rgba(59, 41, 32, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#FFFDF9",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontSize: "30px",
          fontWeight: "600",
          color: "#FFFDF9",
          letterSpacing: "-1px",
        }}
      >
        LivingCraft
      </a>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "42px",
        }}
      >
        <a
          href="#home"
          style={{
            color: "#FFFDF9",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
        >
          Home
        </a>

        <a
          href="#rooms"
          style={{
            color: "#FFFDF9",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
        >
          Rooms
        </a>

        <a
          href="#gallery"
          style={{
            color: "#FFFDF9",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
        >
          Gallery
        </a>

        <a
          href="#contact"
          style={{
            color: "#FFFDF9",
            fontSize: "16px",
            transition: "color 0.3s ease",
          }}
        >
          Contact
        </a>

        <button
          style={{
            background: "#A66F43",
            color: "#FFFDF9",
            border: "none",
            padding: "13px 28px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C08A60";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#A66F43";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;