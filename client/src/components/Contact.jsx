
import { useState } from "react";

const fieldStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "16px",
  border: "1px solid #D8C9BB",
  borderRadius: "10px",
  background: "#FDF9F4",
  color: "#4A3428",
  fontSize: "15px", 
  boxSizing: "border-box", 
  fontFamily: "inherit", 
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "Living Room",
    area: "",
    material: "Standard",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous, 
      [name]: value, 
    })); 

    setSubmitted(false); 
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Front-end demonstration only. 
    // Database and email integration will be added later. 
    setSubmitted(true); 
  }

  return (
    <section
      id="contact"
      style={{
        background: "#EFE5DA",
        padding: "clamp(55px, 8vw, 110px) 6%",
        color: "#4A3428",
      }}
    >
      <div
        className="contact-container"
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(30px, 5vw, 70px)",
          alignItems: "center",
        }}
      >
        {/* Introduction */}
        <div>
          <p
            style={{
              color: "#9A6845",
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Let's Create Together
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 48px)",
              lineHeight: "1.15",
              fontWeight: "600",
              margin: "0 0 25px",
            }}
          >
            Ready to Transform Your Space?
          </h2>

          <p
            style={{
              color: "#7A6B5F",
              fontSize: "17px",
              lineHeight: "1.8",
              maxWidth: "500px",
              marginBottom: "35px",
            }}
          >
            Tell us about your dream space and your budget.
            Let's explore the possibilities together.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "#5E5047",
              fontSize: "15px",
            }}
          >
            <p>📧 hello@livingcraft.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Indore, India</p>
          </div>
        </div>

        {/* Quote Request Form */}
        <div
          style={{
            background: "#FFFDF9",
            padding: "clamp(22px, 4vw, 40px)",
            borderRadius: "22px",
            boxShadow: "0 15px 40px rgba(74,52,40,0.12)",
          }}
        >
          <h3
            style={{
              fontSize: "25px",
              margin: "0 0 10px",
            }}
          >
            Start Your Design Journey
          </h3>

          <p
            style={{
              color: "#7A6B5F",
              fontSize: "14px",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            Share a few details to help us understand your project.
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="customer-name"
              style={labelStyle}
            >
              Your name *
            </label>
            <input
              id="customer-name" 
              name="name" 
              type="text" 
              autoComplete="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              style={fieldStyle}
            />

            <label
              htmlFor="customer-email"
              style={labelStyle}
            >
              Your email *
            </label>
            <input
              id="customer-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              style={fieldStyle}
            />

            <label
              htmlFor="quote-room-type"
              style={labelStyle}
            >
              Room type *
            </label>
            <select
              id="quote-room-type"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              style={fieldStyle}
            >
              <option value="Living Room">Living Room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Office">Office</option>
            </select>

            <label
              htmlFor="quote-area"
              style={labelStyle}
            >
              Room area (sq. ft.) *
            </label>
            <input
              id="quote-area"
              name="area"
              type="number"
              min="1"
              max="100000"
              step="1"
              placeholder="e.g. 200"
              value={formData.area}
              onChange={handleChange}
              required
              style={fieldStyle}
            />

            <label
              htmlFor="quote-material"
              style={labelStyle}
            >
              Material quality
            </label>
            <select
              id="quote-material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              style={fieldStyle}
            >
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>

            <label
              htmlFor="quote-budget"
              style={labelStyle}
            >
              Preferred budget
            </label>
            <select
              id="quote-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={fieldStyle}
            >
              <option value="">Select a budget range</option>
              <option value="Under ₹50,000">Under ₹50,000</option>
              <option value="₹50,000–₹1 lakh">₹50,000–₹1 lakh</option>
              <option value="₹1–₹3 lakh">₹1–₹3 lakh</option>
              <option value="₹3–₹5 lakh">₹3–₹5 lakh</option>
              <option value="Above ₹5 lakh">Above ₹5 lakh</option>
            </select>

            <label
              htmlFor="quote-message" 
              style={labelStyle} 
            > 
              Tell us about your project *
            </label> 
            <textarea 
              id="quote-message" 
              name="message" 
              rows={4} 
              placeholder="Describe your ideas, preferred style, or requirements..."
              value={formData.message} 
              onChange={handleChange} 
              required 
              maxLength={2000}
              style={{
                ...fieldStyle,
                resize: "vertical",
                lineHeight: "1.6",
              }}
            />

            <button 
              type="submit" 
              style={{ 
                width: "100%", 
                background: "#8B5E3C", 
                color: "#FFFDF9", 
                border: "none", 
                padding: "15px", 
                borderRadius: "30px", 
                fontSize: "15px", 
                fontWeight: "600", 
                cursor: "pointer", 
              }} 
            > 
              Request a Quote → 
            </button> 

            {submitted && (  
              <div 
                role="status" 
                style={{ 
                  marginTop: "18px", 
                  padding: "15px", 
                  borderRadius: "10px", 
                  background: "#E8F0E5",
                  color: "#35553A",
                  fontSize: "14px",
                  lineHeight: "1.7", 
                }}
              >
                <strong>Form completed successfully!</strong>
                <p style={{ margin: "5px 0 0" }}>
                  Your details have been validated in this demo.
                  No request has been sent or saved yet.
                </p> 
              </div>
            )} 
          </form> 
        </div> 
      </div> 
    </section> 
  );
}

const labelStyle = { 
  display: "block", 
  marginBottom: "8px", 
  color: "#5E5047", 
  fontSize: "14px", 
  fontWeight: "600",
};

export default Contact;
