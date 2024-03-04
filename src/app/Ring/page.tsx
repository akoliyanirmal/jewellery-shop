/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./ring.module.css";

function Ring() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Ring categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.imgs}
                    src="/images/engagement.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>engagement ring</h3>
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img
                  className={classes.imgs}
                  src="/images/solitaire.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>solitaire ring</h3>
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/claddagh.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>claddagh ring</h3>
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/cocktail.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>cocktail ring</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/knot.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>knot ring</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/cluster.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>cluster ring</h3>
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/halo.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>halo ring</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/pave.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>pave ring</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ring;
