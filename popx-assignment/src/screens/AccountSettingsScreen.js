import React from "react";

const AccountSettingsScreen = () => {
  return (
    <div className="app-shell">
      <div className="screen" style={{ backgroundColor: "#f8f8fb", padding: 0 }}>
        <div className="account-header" style={{ padding: "12px 20px" }}>
          Account Settings
        </div>
        <div className="account-body" style={{ padding: "16px 20px" }}>
          <div className="account-card">
            <div className="avatar-wrapper" style={{ width: 80, height: 80, position: "relative" }}>
              <img
                src="images/image.png"
                alt="User Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.background = "#d2d2e0";
                }}
              />
              <button
                style={{
                  position: "absolute",
                  right: -2,
                  bottom: -2,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#6a0fff",
                  border: "2px solid #ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <img
                  src="images/camera.png"
                  alt="Camera"
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    e.target.textContent = "📷";
                  }}
                />
              </button>
            </div>
            <div style={{ flex: 1 }}>
              <div className="account-name" style={{ fontSize: 13 }}>
                Marry Doe
              </div>
              <div className="account-email" style={{ fontSize: 11 }}>
                Marry@gmail.com
              </div>
              <div className="account-description" style={{ fontSize: 11, marginTop: 6 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsScreen;
