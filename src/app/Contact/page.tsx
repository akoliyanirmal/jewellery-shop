"use client";
import React, { useState } from "react";
import classes from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <section className={classes.contact}>
        <div className={classes.container}>
          <div className={classes.Shead}>
            <h2>Contact Us</h2>
            <p>Contact Us for More Details</p>
          </div>
          <form className={classes.forms} onSubmit={handleSubmit}>
            <input
              className={classes.inputsFild}
              type="text"
              name="firstName"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="phone"
              placeholder="Your Phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              className={classes.textarea}
              name="message"
              rows={8}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <div>
              <button type="submit" className={classes.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
