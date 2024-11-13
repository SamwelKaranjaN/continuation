import React, { useState } from "react";
import "./authenticate.css";

export const Authenticated = ({ formtype }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(formtype === "login");
  const [isModalOpen, setIsModelOpen] = useState(true); // State to control modal visibility

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Logging in with", email, password);
    } else {
      console.log("Registering with", email, password);
    }
  };

  const close = () => {
    setIsModelOpen(false);
  };

  if (!isModalOpen) return null; // If modal is closed, return null to stop rendering it

  return (
    <div className="modal-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={close}>
          ×
        </button>
        {/* Close button */}
        <div className="auth-form-container">
          {isLogin ? (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Login</button>
                <h5> or use your GMAIL</h5>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  style={{ cursor: "pointer", color: "orange" ,fontWeight: "bolder"}}
                >
                  Register here
                </span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter  your password"
                  required
                />
              </div>
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  style={{ cursor: "pointer", color: "rgba(166, 255, 0, 0.651)" ,fontWeight: "bolder" }}
                >
                  Login here
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
