/* eslint-disable @next/next/no-img-element */
// "use client";

import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import Link from "next/link";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

function NavBar() {
  return (
    <>
      <header className={classes.AllData}>
        <div className={classes.container}>
          <div className={classes.brand}>
            <AllInclusiveIcon className={classes.img} />
            <p>Infinity Golden Jewelry</p>
          </div>
        </div>

        <section className={classes.section2}>
          {/* <img className={classes.home} src="/images/home" alt="" /> */}
          <div className={classes.container}>
            <div className={classes.mainContainer}>
              <h1 className={classes.heding}>Infinity Golden Jewelry</h1>
              <h2 className={classes.heding2}>
                24 Caratage Yellow Gold Bracelet
              </h2>
              <p className={classes.heding3}>
                Shope the latest designs from new brands
              </p>
              <Link className={classes.links} href="Custom-Jewellery">
                - View Products
              </Link>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
