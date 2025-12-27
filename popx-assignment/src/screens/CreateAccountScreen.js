import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountScreen = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState("yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className="app-shell">
      <div className="screen" style={{ overflowY: "auto" }}>
        <h1 className="page-title" style={{ marginBottom: 2, fontSize: 18 }}>
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <div className="input-wrapper" style={{ marginBottom: 10 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Full Name<span>*</span>
            </label>
            <input className="input-field" style={{ height: 36 }} defaultValue="Marry Doe" />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 10 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Phone<span>*</span>
            </label>
            <input className="input-field" style={{ height: 36 }} defaultValue="9876543210" />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 10 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Email<span>*</span>
            </label>
            <input className="input-field" style={{ height: 36 }} defaultValue="marry@example.com" />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 10 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Password<span>*</span>
            </label>
            <input
              className="input-field"
              style={{ height: 36 }}
              type="password"
              defaultValue="password123"
            />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 10 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Company name
            </label>
            <input className="input-field" style={{ height: 36 }} defaultValue="PopX Inc" />
          </div>

          <div style={{ marginTop: 8, marginBottom: 16 }}>
            <p className="input-label" style={{ marginBottom: 4, fontSize: 11 }}>
              Are you an Agency?<span>*</span>
            </p>
            <div className="radio-row" style={{ gap: 10 }}>
              <label className="radio-label" style={{ fontSize: 11 }}>
                <input
                  type="radio"
                  className="radio-input"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                />
                Yes
              </label>
              <label className="radio-label" style={{ fontSize: 11 }}>
                <input
                  type="radio"
                  className="radio-input"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="primary-btn" style={{ height: 42 }}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
