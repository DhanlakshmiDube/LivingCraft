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
                margin: "18px 0 9px",
                fontWeight: "600",
              }}
            >
              Approximate area (sq. ft.)
            </label>

            <input
              id="room-area"
              type="number"
              min="20"
              max="5000"
              step="10"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              style={fieldStyle}
            />

            <input
              type="range"
              min="50"
              max="1500"
              step="25"
              value={safeArea}
              onChange={(event) => setArea(event.target.value)}
              aria-label="Area in square feet"
              style={{
                width: "100%",
                accentColor: "#8B5E3C",
                marginTop: "10px",
                cursor: "pointer",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "#7A6B5F",
                marginTop: "4px",
              }}
            >
              <span>50 sq. ft.</span>
              <span>1,500 sq. ft.</span>
            </div>

            <label
              htmlFor="material-quality"
              style={{
                display: "block",
                margin: "18px 0 9px",
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
              {Object.keys(materialOptions).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <p
              style={{
                color: "#7A6B5F",
                fontSize: "13px",
                margin: "8px 0 0",
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
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: 0,
                color: "#D8C9BB",
              }}
            >
              Estimated Investment
            </p>

            <div
              style={{
                fontSize: "clamp(34px, 4vw, 44px)",
                fontWeight: "700",
                margin: "10px 0 24px",
                color: "#F6EFE7",
              }}
            >
              {formatCurrency(total)}
            </div>

            <h4
              style={{
                fontSize: "15px",
                fontWeight: "600",
                margin: "0 0 14px",
                color: "#D8C9BB",
              }}
            >
              Cost Breakdown
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {breakdown.map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      marginBottom: "6px",
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontWeight: "600" }}>
                      {formatCurrency(total * item.share)}
                    </span>
                  </div>

                  <div
                    style={{
                      height: "6px",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${item.share * 100}%`,
                        background: "#C08A60",
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <div style={{ fontSize: "12px", color: "#D8C9BB" }}>
                  Estimated Rate
                </div>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  ₹
                  {Math.round(
                    roomTypes[roomType].rate *
                      materialOptions[material].multiplier
                  ).toLocaleString("en-IN")}
                  /sq. ft.
                </div>
              </div>

              <a
                href="#contact"
                style={{
                  background: "#C08A60",
                  color: "#FFFDF9",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  transition: "background 0.2s ease",
                }}
              >
                Discuss This Estimate →
              </a>
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
                margin: "18px 0 0",
                lineHeight: "1.5",
              }}
            >
              * Estimates are for illustrative planning purposes. Final quotes
              depend on structural requirements, site conditions, and bespoke
              selection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #D8C9BB",
  borderRadius: "10px",
  background: "#FFFDF9",
  color: "#4A3428",
  fontSize: "14px",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default BudgetCalculator;
