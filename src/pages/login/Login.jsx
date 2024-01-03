import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Cookies from "js-cookie";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [emptyUsername, setEmptyUsername] = useState();
  const [emptyPassword, setEmptyPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  var theme = Cookies.get("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    };

    try {
      await fetch("/api/login", requestOptions)
        .then((response) => {
          if (response.status === 200) {
            navigate("/");
            window.location.reload(false);
          } else {
            setError("Login failed. Please try again");
          }
        })
        .catch((error) => {
          console.error("Error checking authentication:", error);
        });
    } catch (error) {
      console.error("Login error: ", error);
    }

    if (form.username === "" || form.username === null) {
      setEmptyUsername(true);
      setError("Please submit username and password");
    } else {
      setEmptyUsername(false);
    }

    if (form.password === "" || form.password === null) {
      setEmptyPassword(true);
      setError("Please submit username and password");
    } else {
      setEmptyPassword(false);
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <div className="login">
          <h1>Sign In</h1>
          <input
            className={`${emptyUsername ? "error-border" : ""}`}
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleInputChange}
          />
          <input
            className={`${emptyPassword ? "error-border" : ""}`}
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin} type="submit">
            Sign In
          </button>
          {error && (
            <div className="error-message">
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right"></div>
        </div>
      </div>
    </div>
  );
}
