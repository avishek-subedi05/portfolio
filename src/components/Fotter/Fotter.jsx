import React from "react";
import "./Fotter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Avishek Subedi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
