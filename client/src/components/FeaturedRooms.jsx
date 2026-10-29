const rooms = [
  {
    title: "Modern Living Room",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Elegant Bedroom",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturedRooms() {
  return (
    <section
      style={{
        padding: "70px 8%",
        backgroundColor: "#f5eee4",
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
          Featured Rooms
        </h2>

        <p
          style={{
            color: "#806b5b",
            fontSize: "16px",
          }}
        >
          Explore beautiful interior spaces designed for modern living.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
        }}
      >
        {rooms.map((room) => (
          <div
            key={room.title}
            style={{
              backgroundColor: "#fffaf4",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(90, 62, 43, 0.12)",
            }}
          >
            <img
              src={room.image}
              alt={room.title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{ padding: "20px" }}> 
              <p 
                style={{ 
                  color: "#9a7658", 
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {room.category}
              </p>

              <h3
                style={{
                  color: "#5a3e2b",
                  fontSize: "21px",
                  margin: 0,
                }}
              >
                {room.title}
              </h3> 
            </div>
          </div>
        ))}
      </div> 
    </section>
  );
}

export default FeaturedRooms; 