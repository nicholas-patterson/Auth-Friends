import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Auth Friends Header</h1>
      <Link to="/friendslist" color="inherit">
        Friends List
      </Link>
      <Link to="/login" color="inherit">
        Login
      </Link>
    </>
  );
};

export default Header;
