const galleryItems = [
  {
    title: "Warm Living Space",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Kitchen",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cozy Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Elegant Workspace",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

function Gallery() {
  return (
    <section
      style={{
        padding: "70px 8%",
        backgroundColor: "#fffaf4",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            color: "#5a3e2b",
            marginBottom: "10px",
          }}
        >
          Design Inspiration
        </h2>

        <p style={{ color: "#806b5b" }}>
          Discover beautiful spaces and find inspiration for your dream home.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {galleryItems.map((item) => (
          <div
            key={item.title}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              backgroundColor: "#f5eee4",
              boxShadow: "0 5px 18px rgba(90, 62, 43, 0.12)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <h3
              style={{
                color: "#5a3e2b",
                fontSize: "17px",
                padding: "15px",
                margin: 0,
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery; 