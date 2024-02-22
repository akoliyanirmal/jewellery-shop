import React from "react";
import classes from "./Contact.module.css";
import Link from "next/link";

function Contact() {
  return (
    <>
      <section className={classes.contact}>
        <div className={classes.container}>
          <div className={classes.Shead}>
            <h2>Contact Us</h2>
            <p>Contact Us for More Details</p>
          </div>
          <form className={classes.forms}>
            <input
              className={classes.inputsFild}
              type="text"
              name="FirstName"
              placeholder="Your First Name"
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="LastName"
              placeholder="Your Last Name"
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="phone"
              placeholder="Your Phone number"
            />
            <input
              className={classes.inputsFild}
              type="text"
              name="email"
              placeholder="Your Email Address"
            />
            <textarea
              className={classes.textarea}
              name="message"
              rows={8}
              placeholder="Your Message"
            ></textarea>

            <div>
              <Link className={classes.button} href="/">
                Button
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
