/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./bracelet.module.css";

function bracelet() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>bracelet categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.imgs}
                    src="/images/Chain.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>Chain bracelets</h3>
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img
                  className={classes.img}
                  src="/images/Friendship.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Friendship bracelets</h3>
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/gemstone.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Gemstone bracelets</h3>
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/golds.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>gold bracelets</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/diamond.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>diamond bracelets</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/wooden.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>wooden bracelets</h3>
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/leather.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>leather bracelets</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/bar2.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>bar bracelets</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default bracelet;
