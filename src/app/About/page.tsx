import React from "react";
import classes from "./About.module.css";

function Abouts() {
  return (
    <>
      {/* THIS IS SECTION 1 */}

      <section className={classes.main}>
        <div className={classes.sectionHead}>
          <h2>About Us</h2>
          <p>Learn more about us and quality of our products</p>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.leftImg}></div>
          <div className={classes.rightHead}>
            <div className={classes.text}>
              <h3>Who we are</h3>

              <div className={classes.info}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>

              <div className={classes.infor}>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS SECTION 2 */}

      <section className={classes.mains}>
        <div className={classes.wrapper}>
          <div className={classes.leftImgs}></div>
          <div className={classes.rightHead}>
            <div className={classes.text}>
              <h3>work</h3>

              <div className={classes.info}>
                <p>Product Sourcing.</p>
              </div>

              <div className={classes.infor}>
                <p>Inventory Management.</p>
              </div>

              <div className={classes.infor}>
                <p>Display and Merchandising.</p>
              </div>

              <div className={classes.infor}>
                <p>Customer Service.</p>
              </div>

              <div className={classes.infor}>
                <p>Sales Process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS SECTION 3 */}

      <section className={classes.mains}>
        <div className={classes.wrapper}>
          <div className={classes.leftImgs3}></div>
          <div className={classes.rightHead}>
            <div className={classes.text}>
              <h3>slaes</h3>

              <div className={classes.sales}>
                A jewelry sales associate assists customers in selecting and
                purchasing jewelry. They provide product information, offer
                advice on styles and trends, showcase merchandise, and handle
                transactions. Customer service, product knowledge, and a
                friendly demeanor are key aspects of the role.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Abouts;
