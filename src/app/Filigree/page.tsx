/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Filigree.module.css";

function Filigree() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Filigree Jewelry categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.img}
                    src="/images/Cuttack.webp"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>Cuttack Tarakasi</h3>₹ 2,250
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img className={classes.img} src="/images/Peepal.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Peepal Earrings</h3>₹ 1,000
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img className={classes.img} src="/images/Petals.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Petals</h3>₹ 1,200
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/Cascading.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Cascading Dangles</h3>₹ 2,170
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Bead.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Bead Dangles</h3>₹ 900
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Kusum.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Kusum Studs</h3>₹ 1,023
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Mughal.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Mughal Cuffs</h3>₹ 5,382
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Hoops.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Filigree Hoops</h3>₹ 1,680
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/Dangles.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Black Dangles</h3>₹ 980
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/Hanging.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Hanging Beauty</h3>₹ 1,770
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/Swaying.webp"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Swaying and Leafy</h3>₹ 1,023
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Yang.webp" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Yang Earrings</h3>₹ 1,500
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
