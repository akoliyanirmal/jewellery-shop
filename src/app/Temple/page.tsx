/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Temple.module.css";

function Temple() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>temple jewellery categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.img}
                    src="/images/temples.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>temple jewellery</h3>₹
                    65,525
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img
                  className={classes.imgs}
                  src="/images/temples1.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>temple jewellery</h3>₹ 56,356
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/temples2.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>temple jewellery</h3>₹ 24,526
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/temples3.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>temple jewellery</h3>₹ 65,688
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/temples4.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>temple jewellery</h3>₹ 35,568
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/temples5.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>temple jewellery</h3>₹ 48,365
                </div>
              </li>{" "}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Temple;
