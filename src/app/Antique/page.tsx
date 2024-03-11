/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Antique.module.css";

function Antique() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Antique categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.imgs}
                    src="/images/Antique2.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>Necklace Antique</h3>₹ 4,482
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img
                  className={classes.imgs}
                  src="/images/Earring2.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Earring Antique</h3>₹ 657
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/ganpati.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>ganpati Antique</h3>₹ 772
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/belt.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>belt Antique</h3>₹ 3,141
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/toering.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Teo Antique</h3>₹ 387
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/antiqueBangles.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Bangles Antique</h3>₹ 1,611
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/antiquefinger.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>antique finger</h3>₹ 585
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/antiquematil.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>matil Antique</h3>₹ 1,782
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/antiquechoti.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>choti Antique</h3>₹ 6,120
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/kada.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>kada Antique</h3>₹ 801
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/mangalsutra.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>mangalsutra Antique</h3>₹ 972
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/tika.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>tika Antique</h3>₹ 612
                </div>
              </li>
              {/*10 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/Bajuband.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Bajuband Antique</h3>₹ 765
                </div>
              </li>
              {/*11 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/HairBrooch.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>HairBrooch Antique</h3>₹ 792
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Antique;
