import { useState } from "react";
import { loginUser, registerUser } from "../services/api";

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let result;
      if (isLogin) {
        result = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      } else {
        result = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      if (result.success && result.data) {
        onAuthSuccess(result.data);
        onClose();
      } else {
        setError(result.message || "Authentication failed");
      }
    } catch (err) {
      setError(err.message || "Failed to authenticate. Please verify server connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    border: "1px solid #D8C9BB",
    borderRadius: "8px",
    background: "#FDF9F4",
    color: "#4A3428",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "inherit",
    outline: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(30, 20, 15, 0.65)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFFDF9",
          borderRadius: "20px",
          maxWidth: "420px",
          width: "100%",
          padding: "32px",
          boxShadow: "0 20px 45px rgba(45, 30, 22, 0.25)",
          color: "#4A3428",
          position: "relative",
          animation: "fadeIn 0.2s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "18px",
            background: "transparent",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: "#8B7363",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            margin: "0 0 8px",
            textAlign: "center",
          }}
        >
          {isLogin ? "Welcome Back" : "Join LivingCraft"}
        </h3>

        <p
          style={{
            textAlign: "center",
            color: "#7A6B5F",
            fontSize: "14px",
            margin: "0 0 22px",
          }}
        >
          {isLogin
            ? "Sign in to manage your saved designs and quotes"
            : "Create an account to explore and plan your dream spaces"}
        </p>

        {/* Tab switch */}
        <div
          style={{
            display: "flex",
            background: "#EFE5DA",
            borderRadius: "30px",
            padding: "4px",
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={() => {
              setIsLogin(true);
              setError("");
            }}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "25px",
              border: "none",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              background: isLogin ? "#FFFDF9" : "transparent",
              color: isLogin ? "#4A3428" : "#8B7363",
              transition: "all 0.2s ease",
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsLogin(false);
              setError("");
            }}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "25px",
              border: "none",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              background: !isLogin ? "#FFFDF9" : "transparent",
              color: !isLogin ? "#4A3428" : "#8B7363",
              transition: "all 0.2s ease",
            }}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                style={inputStyle}
                disabled={loading}
              />
            </div>
          )}

          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "6px",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              disabled={loading}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              style={inputStyle}
              disabled={loading}
            />
          </div>

          {error && (
            <div
              style={{
                background: "#FCEBEB",
                color: "#9C2B2B",
                border: "1px solid #F5C6C6",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                marginBottom: "14px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#B39580" : "#8B5E3C",
              color: "#FFFDF9",
              border: "none",
              padding: "13px",
              borderRadius: "25px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "6px",
              transition: "background 0.2s ease",
            }}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p
          style={{
            fontSize: "12px",
            color: "#8B7363",
            textAlign: "center",
            marginTop: "18px",
            marginBottom: 0,
          }}
        >
          {isLogin ? "Don't have an account yet? " : "Already have an account? "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            style={{
              color: "#8B5E3C",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isLogin ? "Register here" : "Sign in here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
