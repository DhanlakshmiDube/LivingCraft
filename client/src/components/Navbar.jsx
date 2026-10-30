import { useState } from "react";
import AuthModal from "./AuthModal";
import { getStoredUser, clearAuthData } from "../services/api";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(() => getStoredUser());
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    clearAuthData();
    setCurrentUser(null);
  };

  return (
    <>
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
            textDecoration: "none",
          }}
        >
          LivingCraft
        </a>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <a
            href="#home"
            style={{
              color: "#FFFDF9",
              fontSize: "16px",
              textDecoration: "none",
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
              textDecoration: "none",
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
              textDecoration: "none",
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
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            Contact
          </a>

          {currentUser ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                style={{
                  fontSize: "14px",
                  color: "#E5D2BE",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>👤</span>
                <span>{currentUser.name}</span>
              </span>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  color: "#FFFDF9",
                  border: "1px solid rgba(255, 253, 249, 0.3)",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFFDF9";
                  e.currentTarget.style.background = "rgba(255, 253, 249, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 253, 249, 0.3)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
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
              Sign In
            </button>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}

export default Navbar;
