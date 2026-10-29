const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "1,200+",
    label: "Happy Clients",
  },
  {
    number: "150+",
    label: "Design Experts",
  },
  {
    number: "25",
    label: "Design Awards",
  },
];

function Stats() {
  return (
    <section
      style={{
        background: "#4A3428",
        padding: "85px 70px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative element */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "50px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: "15px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3
              style={{
                color: "#F7F2EC",
                fontSize: "48px",
                fontWeight: "600",
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              {stat.number}
            </h3>

            <div
              style={{
                width: "35px",
                height: "2px",
                background: "#B98A63",
                margin: "0 auto 15px",
              }}
            />

            <p
              style={{
                color: "#D8C9BB",
                fontSize: "15px",
                letterSpacing: "1px",
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats; 