import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

function Navebar() {
  return (
    <>
      <section>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <HomeIcon className={classes.homes} />
            <li className={classes.bar}>
              <Link className={classes.home} href="/">
                Home
              </Link>
            </li>

            <li className={classes.bar}>
              <AutoFixHighIcon className={classes.Custom} />
              <Link className={classes.home} href="Custom-Jewellery">
                Custom Jewelry
              </Link>
            </li>

            <li className={classes.bar}>
              <ColorLensIcon className={classes.Designer} />
              <Link className={classes.home} href="Designer-Jewellery">
                Designer Jewelry
              </Link>
            </li>

            <li className={classes.bar}>
              <InfoIcon className={classes.info} />
              <Link className={classes.home} href="About">
                About
              </Link>
            </li>

            <li className={classes.bar}>
              <ContactsIcon className={classes.contact} />
              <Link className={classes.home} href="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navebar;
