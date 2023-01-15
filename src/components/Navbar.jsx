import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Simple Pagination</Link>
      <Link style={{ marginLeft: "20px" }} to="/infinite">
        Infine Loading
      </Link>
    </div>
  );
};

export default Navbar;
