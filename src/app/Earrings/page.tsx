/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Earrings.module.css";

function Earrings() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Earrings categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img className={classes.img} src="/images/Stud.png" alt="" />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>Stud Earrings</h3>
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img className={classes.imgs} src="/images/Hoop.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Hoop Earrings</h3>
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img className={classes.imgs} src="/images/Huggie.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Huggie Earrings</h3>
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Dangle.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Dangle Earrings</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/jacket.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>jacket Earrings</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/Teardrop.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Teardrop Earrings</h3>
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/Drop.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Drop Earrings</h3>
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/Single.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Single Earrings</h3>
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Jhumka.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Jhumka Earrings</h3>
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/Mismatched.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Mismatched Earrings</h3>
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/EvilEye.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>EvilEye Earrings</h3>
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/perals.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>perals Earrings</h3>
                </div>
              </li>
              {/*10 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Dainty.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Dainty Earrings</h3>
                </div>
              </li>
              {/*11 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/gamestone2.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Gemstone Earrings</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Earrings;
