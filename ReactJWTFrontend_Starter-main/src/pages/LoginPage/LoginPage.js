import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { userName: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    loginUser,
    defaultValues
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="text-container">
          Username:{" "}
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
        </label>
        <label className="text-container">
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error" style ={{color: "black"}}>Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register" style = {{color: "black"}}> <strong>Click to register!</strong></Link>
        <button>Login!</button>
      </form>
    </div>
  );
};

export default LoginPage;
