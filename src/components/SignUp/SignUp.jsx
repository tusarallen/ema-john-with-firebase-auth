import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
        <p className="text-error">{error}</p>
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
    </div>
  );
};

export default SignUp;
