import { Link } from "@reach/router";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logo-fish"
          src={require("../Images/SVGimages/fish11.svg")}
          alt={"fish"}
        />
      </Link>
      <img
        className="logo-name"
        src={require("../Images/SVGimages/ReactFishies.svg")}
        alt={"fish"}
      />
    </header>
  );
};

export default Header;
