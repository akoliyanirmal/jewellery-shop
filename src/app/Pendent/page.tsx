/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Pendent.module.css";

function Pendent() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Pendent categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.imgs}
                    src="/images/gamependent.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>gamestone pendent</h3>₹
                    23,657
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img className={classes.imgs} src="/images/locket.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>locket pendent</h3>₹ 19,760
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img className={classes.imgs} src="/images/choker.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>choker pendent</h3>₹ 12,774
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/cluster2.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>cluster pendent</h3>₹ 56,765
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/heart.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>heart pendent</h3>₹ 45,712
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/talisman.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>talisman pendent</h3>₹ 10,760
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/jadau.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>jadau pendent</h3>₹ 6,763
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/aum.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>aum pendent</h3>₹ 14,562
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/kalapi.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>kalapi pendent</h3>₹ 65,871
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.imgs}
                  src="/images/yagnakaya.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>yagnakaya pendent</h3>₹ 70,674
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pendent;
