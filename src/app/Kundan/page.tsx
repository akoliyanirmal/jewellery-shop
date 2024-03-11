/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Kundan.module.css";

function Kundan() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Kundan categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.img}
                    src="/images/necklace.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>Kundan necklace</h3>₹ 14,877
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img
                  className={classes.imgs}
                  src="/images/sidemang.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Kundan side mang</h3>₹ 3,999
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/Mathapatti.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Mathapatti Kundan</h3>₹ 2,940
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/kundankada.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>kada kundan</h3>₹ 806
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/bracelet.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>bracelet kundan</h3>₹ 671
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Anklets.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Anklets kundan</h3>₹ 851
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/plating.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>plating kundan</h3>₹ 4,370
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/polki.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>polki kundan</h3>₹ 16,973
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/jiya.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>jiya kundan</h3>₹ 3,500
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/chokers.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>choker kundan</h3>₹ 599
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/findings.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>findings kundan</h3>₹ 251
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Kring.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>ring Brooches</h3>₹ 2007
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kundan;
