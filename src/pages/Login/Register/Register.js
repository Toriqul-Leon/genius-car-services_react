import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.prevent.default();
  };
  return (
    <div className="register-form">
      <h2>Please Register</h2>
      <form action=" " onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" id="" />
        <input
          required
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />

        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Have an Account?{" "}
        <span
          className="text-danger label "
          role="button"
          onClick={navigateLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
