/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <footer className={classes.Fdistributed}>
        <div className={classes.Fleft}>
          <Link href="/">
            <img className={classes.logo} src="/images/infinty.png" alt="" />
          </Link>
          <p className={classes.companyName}>GigaKelvin © 2024</p>
        </div>

        <div className={classes.Fcenter}>
          <div className={classes.addres}>
            <p>
              <span>403,</span>
              mota varachha
            </p>
          </div>

          <div className={classes.contact}>
            <p>+91 9099073826</p>
          </div>

          <div className={classes.mail}>
            <Link className={classes.mails} href="#">
              nirmal@gmail.com
            </Link>
          </div>
          <div className={classes.icons}>
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className={classes.Fright}>
          <p>
            <span>About the company 👇</span>
            Welcome to INFINITY GOLDEN JEWELRY, where exquisite craftsmanship
            meets timeless elegance.company dedicated to creating stunning
            pieces that become cherished symbols of life's most precious
            moments.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
