import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = ({
  commentCount = 6,
  activeCommentId = null,
  onDigitClick,
}) => {
  const navigate = useNavigate();

  const ids = Array.from({ length: commentCount }, (_, i) => i + 1);
  const descending = [...ids].reverse();

  return (
    <div className="app-shell">
      <div className="screen" style={{ justifyContent: "flex-end", position: "relative" }}>
        {/* yellow digits */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 60,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {descending.map((id, idx) => (
            <button
              key={id}
              onClick={() => onDigitClick && onDigitClick(id)}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "none",
                background: "#f3b81a",
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                transform: `translate(${idx * 6}px, ${idx * 8}px)`,
                boxShadow:
                  activeCommentId === id
                    ? "0 0 0 3px rgba(243,184,26,0.4)"
                    : "none",
              }}
            >
              {id}
            </button>
          ))}
        </div>

        {/* bottom content */}
        <div style={{ textAlign: "center" }}>
          <h1 className="page-title" style={{ fontSize: 18, marginBottom: 4 }}>
            Welcome to PopX
          </h1>
          <p className="page-subtitle" style={{ marginBottom: 20, fontSize: 12 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/create-account")}
            style={{ marginBottom: 10, height: 44 }}
          >
            Create Account
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
            style={{ height: 44 }}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
