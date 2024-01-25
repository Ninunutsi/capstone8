import { useNavigate } from "react-router-dom/dist";
import Map from "./Map";
import { useState } from "react";

const UserLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email && password;

  return (
    <div className="authorization">
      <form className="UserForm">
        <h1>Log In</h1>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          onChange={(e) => setPassword(e.target.value)}
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
            Log In
          </button>
          <button onClick={() => navigate("/signup")}>Register</button>
        </div>
      </form>
      <Map />
    </div>
  );
};

export default UserLogIn;
