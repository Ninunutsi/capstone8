import React, { useState } from "react";
import Map from "./Map";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid = name && email && password && confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="authorization">
      <form className="UserForm" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="REmail">Email</label>
        <input
          type="text"
          id="REmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="RPassword">Password</label>
        <input
          type="password"
          id="RPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="CPassword">Confirm Password</label>
        <input
          type="password"
          id="CPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="buttons">
          <button
            type="submit"
            style={{
              backgroundColor: isFormValid
                ? "#235391"
                : "rgba(35, 83, 145, 0.50)",
            }}
          >
            Register
          </button>
        </div>
      </form>
      <Map />
    </div>
  );
};

export default UserSignUp;
