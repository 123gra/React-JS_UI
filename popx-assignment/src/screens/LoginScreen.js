import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className="app-shell">
      <div className="screen">
        <h1 className="page-title" style={{ marginBottom: 8, fontSize: 18 }}>
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="page-subtitle" style={{ marginBottom: 24, fontSize: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper" style={{ marginBottom: 14 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Email Address
            </label>
            <input
              className="input-field"
              style={{ height: 36 }}
              placeholder="Enter email address"              
            />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 20 }}>
            <label className="input-label" style={{ fontSize: 11 }}>
              Password
            </label>
            <input
              className="input-field"
              style={{ height: 36 }}
              type="password"
              placeholder="Enter password"              
            />
          </div>

          <button type="submit" className="secondary-btn" style={{ height: 42 }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
