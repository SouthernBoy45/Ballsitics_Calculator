import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", padding: "50px" }}
          >
            <b>Shoot Right</b>
          </Link>
        </li>
        <li className="brand">
          <Link
            to="/weather"
            style={{ textDecoration: "none", color: "white", padding: "50px" }}
          >
            <button>Weather Conditions</button>
          </Link>
        </li>
        <li className="brand">
          <Link
            to="/input"
            style={{ textDecoration: "none", color: "white", padding: "50px" }}
          >
            <button>NewTarget</button>
          </Link>
        </li>
        <li className="brand">
          <Link
            to="/postShot"
            style={{ textDecoration: "none", color: "white", padding: "50px" }}
          >
            <button>Record Your Shot</button>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
