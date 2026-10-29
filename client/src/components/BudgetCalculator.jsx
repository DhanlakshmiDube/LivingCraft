import { useState } from "react";

const roomTypes = {
  "Living Room": { rate: 1800, icon: "🛋️" },
  Kitchen: { rate: 2400, icon: "🍽️" },
  Office: { rate: 1500, icon: "🪑" },
};

const materialOptions = {
  Basic: { multiplier: 0.8, description: "Simple, budget-friendly finishes" },
  Standard: { multiplier: 1, description: "A balance of quality and cost" },
  Premium: { multiplier: 1.35, description: "Higher-end finishes and materials" },
};

const formatCurrency = (amount) =>
  "₹" + Math.round(amount).toLocaleString("en-IN");

function BudgetCalculator() {
  const [roomType, setRoomType] = useState("Living Room");
  const [area, setArea] = useState("200");
  const [material, setMaterial] = useState("Standard");

  const safeArea = Math.max(0, Math.min(Number(area) || 0, 100000));
  const baseCost = safeArea * roomTypes[roomType].rate;
  const total = baseCost * materialOptions[material].multiplier;

  const breakdown = [
    { label: "Materials and finishes", share: 0.55 },
    { label: "Furniture and fixtures", share: 0.3 },
    { label: "Labour and installation", share: 0.15 },
  ];

  return (
    <section
      id="budget-calculator"
      style={{
        padding: "80px 6%",
        background: "#FFFDF9",
        color: "#4A3428",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "#A67C52",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Plan With Confidence
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 40px)",
            margin: "12px 0",
          }}
        >
          Room Budget Calculator
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#7A6B5F",
            lineHeight: "1.7",
            maxWidth: "570px",
            margin: "0 auto 38px",
          }}
        >
          Explore an estimated budget for your space based on
          its size, room type, and preferred material quality.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#F7F2EC",
              padding: "26px",
              borderRadius: "18px",
              border: "1px solid #E8DED3",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "24px" }}>
              Your Space
            </h3>

            <label
              htmlFor="room-type"
              style={{ display: "block", marginBottom: "9px", fontWeight: "600" }}
            >
              Room type
            </label>

            <select
              id="room-type"
              value={roomType}
              onChange={(event) => setRoomType(event.target.value)}
              style={fieldStyle}
            >
              {Object.keys(roomTypes).map((room) => (
                <option key={room} value={room}>
                  {roomTypes[room].icon} {room}
                </option>
              ))}
            </select>

            <label
              htmlFor="room-area"
              style={{
                display: "block",
                margin: "22px 0 9px",
                fontWeight: "600",
              }}
            >
              Room area (sq. ft.)
            </label>

            <input
              id="room-area"
              type="number"
              min="1"
              max="100000"
              step="1"
              required
              value={area}
              onChange={(event) => setArea(event.target.value)}
              style={fieldStyle}
              placeholder="Enter area in square feet"
            />

            <p
              style={{
                color: "#7A6B5F",
                fontSize: "12px",
                marginTop: "8px",
              }}
            >
              Example: 200 sq. ft.
            </p>

            <label
              htmlFor="material-quality"
              style={{
                display: "block",
                margin: "22px 0 9px",
                fontWeight: "600",
              }}
            >
              Material quality
            </label>

            <select
              id="material-quality"
              value={material}
              onChange={(event) => setMaterial(event.target.value)}
              style={fieldStyle}
            >
              {Object.entries(materialOptions).map(([name, option]) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <p
              style={{
                color: "#7A6B5F",
                fontSize: "13px",
                lineHeight: "1.6",
                marginBottom: 0,
              }}
            >
              {materialOptions[material].description}
            </p>
          </div>

          <div
            style={{
              background: "#4A3428",
              color: "#FFFDF9",
              padding: "30px",
              borderRadius: "18px",
            }}
          >
            <p
              style={{
                color: "#E2C5A5",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Your estimated budget
            </p>

            <p
              aria-live="polite"
              style={{
                fontSize: "clamp(30px, 5vw, 42px)",
                fontWeight: "700",
                margin: "12px 0",
                overflowWrap: "anywhere",
              }}
            >
              {formatCurrency(total)}
            </p>

            <p style={{ color: "#E8DED3", fontSize: "14px" }}>
              {roomType} · {safeArea.toLocaleString("en-IN")} sq. ft. · {material}
            </p>

            <div
              style={{
                height: "1px",
                background: "#806A59",
                margin: "26px 0",
              }}
            />

            <h3 style={{ fontSize: "17px", marginBottom: "20px" }}>
              Estimated cost breakdown
            </h3>

            {breakdown.map((item) => (
              <div key={item.label} style={{ marginBottom: "22px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    fontSize: "14px",
                    marginBottom: "9px",
                  }}
                >
                  <span>{item.label}</span>
                  <strong>{formatCurrency(total * item.share)}</strong>
                </div>

                <div
                  style={{
                    height: "6px",
                    borderRadius: "10px",
                    background: "#806A59",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${item.share * 100}%`,
                      background: "#D9B58C",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            ))}

            <p
              style={{
                color: "#E8DED3",
                fontSize: "12px",
                lineHeight: "1.7",
                marginTop: "26px",
                marginBottom: 0,
              }}
            >
              Demonstration estimate only. Actual costs depend on
              measurements, material brands, location, labour rates,
              and project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 14px",
  borderRadius: "9px",
  border: "1px solid #D8C9BB",
  background: "#FFFDF9",
  color: "#4A3428",
  fontSize: "15px",
}; 

export default BudgetCalculator;
