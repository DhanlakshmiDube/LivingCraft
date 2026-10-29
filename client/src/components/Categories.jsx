import balcony from "../assets/images/balcony.jpg";
import porch from "../assets/images/porch.jpg";
import livingroom from "../assets/images/livingroom.jpg";
import bedroom from "../assets/images/bedroom.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import bathroom from "../assets/images/bathroom.jpg";
import workspace from "../assets/images/workspace.jpg";

const rooms = [
  { name: "Living Room", image: livingroom },
  { name: "Bedroom", image: bedroom },
  { name: "Kitchen", image: kitchen },
  { name: "Bathroom", image: bathroom },
  { name: "Home Office", image: workspace },
  { name: "Balcony", image: balcony },
  { name: "Porch", image: porch },
];

function Categories() {
  return ( 
    <section
      id="rooms"
      style={{
        padding: "110px 70px", 
        background: "#EDE3D8", 
      }} 
    >
      {/* Section Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
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
          Explore Your Space 
        </p>

        <h2
          style={{
            fontSize: "48px", 
            color: "#4A3428", 
            marginBottom: "18px", 
            fontWeight: "600", 
          }} 
        >
          Browse By Room
        </h2>

        <p
          style={{
            color: "#7A6B5F",
            fontSize: "18px", 
          }}
        >
          Find beautiful inspiration for every corner of your home. 
        </p> 
      </div> 

      {/* Room Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      > 
        {rooms.map((room) => ( 
          <div
            key={room.name}
            style={{
              background: "#FFFDF9",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(74, 52, 40, 0.12)",
              cursor: "pointer",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 18px 40px rgba(74, 52, 40, 0.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(74, 52, 40, 0.12)";
            }}
          >
            {/* Image */}
            <div
              style={{
                height: "260px",
                overflow: "hidden",
              }}
            >
              <img
                src={room.image}
                alt={room.name}
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

            {/* Card Content */}
            <div
              style={{
                padding: "25px 28px 28px",
              }}
            >
              <h3
                style={{
                  color: "#4A3428",
                  fontSize: "23px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {room.name}
              </h3>

              <p
                style={{
                  color: "#8A786A",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Discover elegant ideas for your {room.name.toLowerCase()}.
              </p>

              <div
                style={{
                  marginTop: "18px",
                  color: "#9A6845",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                Explore Room → 
              </div>
            </div>
          </div>
        ))}
      </div> 
    </section> 
  );
}

export default Categories; 