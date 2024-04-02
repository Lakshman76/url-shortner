import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((res) => {
        console.log(res)
        navigate("/short-url");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Register form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign Up</button>
      </form>
      <p>already have an account</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
