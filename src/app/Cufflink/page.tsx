/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Cufflink.module.css";

function Filigree() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Cufflink Jewelry categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.img}
                    src="/images/GENTLEMAN.webp"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>GENTLEMAN</h3>₹ 12,688
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img className={classes.img} src="/images/KNOT.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>KNOT</h3>₹ 14,000
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img className={classes.img} src="/images/CAVIAR.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>CAVIAR</h3>₹ 1,200
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/OPERA.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>OPERA</h3>₹ 15,170
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/PREMIUM.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>PREMIUM</h3>₹ 19,000
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/MACRI.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>MACRI</h3>₹ 15,023
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/OPERAS.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>OPERAS</h3>₹ 5,382
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/BLOSSOMS.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>BLOSSOMS</h3>₹ 17,680
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/lion.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>lion</h3>₹ 12,676
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/chimes.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>chimes</h3>₹ 1,770
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/YouBella.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>YouBella</h3>₹ 11,023
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/PEORA.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>PEORA</h3>₹ 14,500
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filigree;
