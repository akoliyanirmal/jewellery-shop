/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Brooch.module.css";

function Brooch() {
  return (
    <>
      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Brooch categories</h2>
          </div>

          <div className={classes.photosHeader}>
            {/*1 */}
            <ul className={classes.head}>
              <li className={classes.one} id="1">
                <div className={classes.card}>
                  <img
                    className={classes.imgs}
                    src="/images/chains.png"
                    alt=""
                  />
                  <div className={classes.listHead}>
                    <h3 className={classes.listone}>chain Brooches</h3>₹ 1,249
                  </div>
                </div>
              </li>
              {/*2 */}
              <li className={classes.one} id="2">
                <img className={classes.imgs} src="/images/Flower.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Flower Brooches</h3>₹ 140
                </div>
              </li>
              {/*3 */}
              <li className={classes.one} id="3">
                <img
                  className={classes.imgs}
                  src="/images/dragonfly.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>dragonfly Brooches</h3>₹ 1,494
                </div>
              </li>
              {/*4 */}
              <li className={classes.one} id="4">
                <img
                  className={classes.img}
                  src="/images/butterfly.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>butterfly Brooches</h3>₹ 546
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/borres.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>borre Brooches</h3>₹ 1,973
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/cameo.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>cameo Brooches</h3>₹ 5,411
                </div>
              </li>{" "}
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/pearls.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>pearl Brooches</h3>₹ 601
                </div>
              </li>
              {/*5 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/Buggy.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Buggy Brooches</h3>₹ 1,973
                </div>
              </li>
              {/*6 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/Pewter.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Pewter Brooches</h3>₹ 345
                </div>
              </li>
              {/*7 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Spray.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Spray Brooches</h3>₹ 6,426
                </div>
              </li>
              {/*8 */}
              <li className={classes.one} id="4">
                <img className={classes.img} src="/images/Dragon.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Dragon Brooches</h3>₹ 2,446
                </div>
              </li>
              {/*9 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/skull.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>skull Brooches</h3>₹ 612
                </div>
              </li>
              {/*10 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/snake.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>snake Brooches</h3>₹ 2,421
                </div>
              </li>
              {/*11 */}
              <li className={classes.one} id="4">
                <img className={classes.imgs} src="/images/panda.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>panda Brooches</h3>₹ 2,655
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brooch;
