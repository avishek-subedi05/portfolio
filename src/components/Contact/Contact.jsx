import React from "react";

import "./Contact.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-flex">
                <ContactForm />
                <SocialLinks />
            </div>
        </section>
    );
};

export default ContactSection;
