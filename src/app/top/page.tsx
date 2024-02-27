"use client";

import React, { useEffect, useState } from "react";
import classes from "./top.module.css";

// import classes from "@/app/Homepage/HomePage.module.css";

function topButton() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Set showScrollTop to true when the user has scrolled down, false otherwise
    setShowScrollTop(scrollY > 100);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScrollTop && (
        <button className={classes.scrollTopButton} onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </>
  );
}

export default topButton;
