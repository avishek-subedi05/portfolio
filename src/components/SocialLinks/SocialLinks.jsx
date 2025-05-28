import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <h3>Connect with Me</h3>
      <div className="icons">
        <a href="https://github.com/avishek-subedi05" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:avisheksubedi05@gmail.com">
          <MdEmail /> Email
        </a>
        <a href="https://linkedin.com/in/AvishekSubedi" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://facebook.com/avishek.subedi.908" target="_blank" rel="noreferrer">
          <FaFacebook /> Facebook
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <FaTwitter /> Twitter
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
