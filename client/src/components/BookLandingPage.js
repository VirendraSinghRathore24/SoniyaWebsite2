import React, { useState } from "react";

export default function BookLandingPage() {
  // Navigation & Checkout States: 'landing' | 'address' | 'payment' | 'success'
  const [step, setStep] = useState("landing");

  // Form fields state
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [orderId, setOrderId] = useState("");

  const bookDetails = {
    title: "The Code Blueprint",
    subtitle: "Master Full-Stack Engineering and Freelancing Systems",
    price: 499,
    author: "Your Name",
    description:
      "Learn how to build advanced production-grade software applications, orchestrate serverless automation loops, and establish a high-income engineering lifecycle from scratch. Packed with practical real-world architecture mappings.",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600", // Premium fallback placeholder book illustration
  };

  const handleInputChange = (field, val) => {
    setAddress((prev) => ({ ...prev, [field]: val }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (
      !address.name ||
      !address.phone ||
      !address.street ||
      !address.pincode
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setStep("payment");
  };

  const handlePaymentComplete = () => {
    // Generate an authentic localized receipt tracking string
    const generatedId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep("success");
  };

  // Pre-compiled global style fragments
  const cardStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "480px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s, cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    width: "100%",
    marginTop: "16px",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#f8fafc",
    color: "#334155",
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        background: "linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* STEP 1: MAIN HERO PRODUCT LANDING PANEL */}
      {step === "landing" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "48px",
            maxWidth: "1000px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Column: Visual Book Stand asset */}
          <div
            style={{ position: "relative", maxWidth: "380px", width: "100%" }}
          >
            <img
              src={bookDetails.coverUrl}
              alt={bookDetails.title}
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow:
                  "5px 15px 35px rgba(0,0,0,0.25), 1px 3px 10px rgba(0,0,0,0.2)",
                transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                transition: "transform 0.5s",
              }}
            />
          </div>

          {/* Right Column: Dynamic Description Text Blocks */}
          <div style={{ flex: "1", minWidth: "300px", maxWidth: "520px" }}>
            <span
              style={{
                color: "#2563eb",
                fontWeight: "700",
                textTransform: "uppercase",
                fontSize: "12px",
                letterSpacing: "1.5px",
              }}
            >
              New Release
            </span>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#0f172a",
                margin: "8px 0 12px 0",
                lineHeight: "1.1",
              }}
            >
              {bookDetails.title}
            </h1>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#475569",
                margin: "0 0 24px 0",
                lineHeight: "1.4",
              }}
            >
              {bookDetails.subtitle}
            </h2>
            <p
              style={{
                color: "#334155",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0 0 32px 0",
              }}
            >
              {bookDetails.description}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                borderTop: "2px solid #cbd5e1",
                paddingTop: "24px",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    color: "#64748b",
                    fontWeight: "600",
                  }}
                >
                  Special Price
                </span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "#0f172a",
                  }}
                >
                  ₹{bookDetails.price}.00
                </span>
              </div>
              <button
                onClick={() => setStep("address")}
                style={{
                  ...buttonStyle,
                  marginTop: 0,
                  flex: 1,
                  padding: "18px 28px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: SHIPPING ADDRESS CONFIGURATION ENGINE */}
      {step === "address" && (
        <div style={cardStyle}>
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "24px",
              color: "#0f172a",
              fontWeight: "700",
            }}
          >
            Shipping Details
          </h2>
          <p
            style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#64748b" }}
          >
            Where should we deliver your copy of "{bookDetails.title}"?
          </p>

          <form
            onSubmit={handleAddressSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number (10 digit)"
              value={address.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Street Address / Area"
              value={address.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
              style={inputStyle}
              required
            />

            <div style={{ display: "flex", gap: "12px" }}>
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                style={inputStyle}
                required
              />
              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) => handleInputChange("pincode", e.target.value)}
              style={inputStyle}
              required
            />

            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              <button
                type="button"
                onClick={() => setStep("landing")}
                style={{
                  ...buttonStyle,
                  background: "#f1f5f9",
                  color: "#475569",
                  boxShadow: "none",
                }}
              >
                Back
              </button>
              <button
                type="submit"
                style={{ ...buttonStyle, marginTop: 0, flex: 2 }}
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 3: QR CODE PAYMENT EMULATOR */}
      {step === "payment" && (
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2
            style={{ margin: "0 0 6px 0", fontSize: "22px", color: "#0f172a" }}
          >
            Scan to Pay
          </h2>
          <p
            style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#475569" }}
          >
            Scan the dynamic UPI QR code below using any app (GPay, PhonePe,
            Paytm)
          </p>

          {/* Authentic localized sandbox UPI QR engine wrapper rendering */}
          <div
            style={{
              background: "#f8fafc",
              padding: "20px",
              borderRadius: "16px",
              display: "inline-block",
              border: "1px solid #e2e8f0",
              marginBottom: "16px",
            }}
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=yourupiid@bank%26pn=AuthorName%26am=${bookDetails.price}%26cu=INR`}
              alt="UPI Payment QR Code"
              style={{ display: "block", width: "220px", height: "220px" }}
            />
            <div
              style={{
                marginTop: "12px",
                fontSize: "15px",
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              Amount: ₹{bookDetails.price}.00
            </div>
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              margin: "0 0 24px 0",
              background: "#f0fdf4",
              padding: "10px",
              borderRadius: "6px",
              color: "#166534",
            }}
          >
            🔒 Secured Sandboxed Payment Environment
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setStep("address")}
              style={{
                ...buttonStyle,
                background: "#f1f5f9",
                color: "#475569",
                boxShadow: "none",
                marginTop: 0,
              }}
            >
              Back
            </button>
            <button
              onClick={handlePaymentComplete}
              style={{
                ...buttonStyle,
                background: "#22c55e",
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.2)",
                marginTop: 0,
                flex: 2,
              }}
            >
              Simulate Success Payment
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: SUCCESS VERIFICATION RECEIPT DISPLAY */}
      {step === "success" && (
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
            animation: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#dcfce7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px auto",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#166534"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "26px",
              color: "#166534",
              fontWeight: "800",
            }}
          >
            Order Placed!
          </h2>
          <p
            style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#475569" }}
          >
            Thank you for buying <strong>{bookDetails.title}</strong>. Your
            reading copy will be shipped shortly.
          </p>

          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              textAlign: "left",
              border: "1px solid #e2e8f0",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <span style={{ color: "#64748b" }}>Order Reference ID:</span>{" "}
              <strong style={{ color: "#0f172a", float: "right" }}>
                {orderId}
              </strong>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "1px dashed #cbd5e1",
                margin: "4px 0",
              }}
            />
            <div>
              <span style={{ color: "#64748b" }}>Deliver To:</span>{" "}
              <strong style={{ color: "#0f172a", float: "right" }}>
                {address.name}
              </strong>
            </div>
            <div>
              <span style={{ color: "#64748b" }}>Contact Ref:</span>{" "}
              <strong style={{ color: "#0f172a", float: "right" }}>
                {address.phone}
              </strong>
            </div>
            <div>
              <span style={{ color: "#64748b" }}>Address:</span>{" "}
              <span
                style={{
                  color: "#334155",
                  fontWeight: "500",
                  display: "block",
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                {address.street}, {address.city}, {address.state} -{" "}
                {address.pincode}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setStep("landing");
              setAddress({
                name: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                pincode: "",
              });
            }}
            style={{
              ...buttonStyle,
              background: "#0f172a",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)",
              marginTop: "24px",
            }}
          >
            Return to Homepage
          </button>
        </div>
      )}
    </div>
  );
}
