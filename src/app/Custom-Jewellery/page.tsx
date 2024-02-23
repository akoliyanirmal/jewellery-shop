/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Custom-Jewellery.module.css";
import Link from "next/link";

function CustomJeweller() {
  return (
    <>
      {/* this is section 1 */}

      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2 className={classes.Custom}>Custom Jewelry</h2>
            <p className={classes.latest}>Latest Design</p>
          </div>

          <div className={classes.photosHeader}>
            <ul className={classes.head}>
              {/* navigate to full details */}

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="/images/braclate.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Bracelets</h3>
                  <h3 className={classes.price}>price: ₹48,345</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="https://s-media-cache-ak0.pinimg.com/originals/27/41/69/274169b4444ccf7448d4133c13dd05c1.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Rings</h3>
                  <h3 className={classes.price}>price: ₹13,004</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="https://s-media-cache-ak0.pinimg.com/originals/c9/89/55/c98955bbb6331b4aa98cf33bdc84a84a.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Earrings</h3>
                  <h3 className={classes.price}>price: ₹7,028</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="/images/pendent.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Pendants</h3>
                  <h3 className={classes.price}>price: ₹17,687</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* this is section 2 */}

      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.photosHeader}>
            <ul className={classes.head}>
              <li className={classes.one}>
                <img className={classes.imgs} src="/images/gold.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>gold jewellery</h3>
                  <h3 className={classes.price}>price: ₹1,25,032</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img className={classes.imgs} src="/images/ant.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Antique jewellery</h3>
                  <h3 className={classes.price}>price: ₹6,57,282</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img className={classes.imgs} src="/images/brooch.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Brooch</h3>
                  <h3 className={classes.price}>price: ₹1,999</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img className={classes.imgs} src="/images/kundan.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Kundan jewellery</h3>
                  <h3 className={classes.price}>price: ₹8,242</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* this is section 3 */}

      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.photosHeader}>
            <ul className={classes.head}>
              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="/images/platinium.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Platinum</h3>
                  <h3 className={classes.price}>price: ₹2,360</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img className={classes.imgs} src="/images/Temple.png" alt="" />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Temple jewellery</h3>
                  <h3 className={classes.price}>price: ₹95,469</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="/images/Filigree.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>Filigree jewellery</h3>
                  <h3 className={classes.price}>price: ₹62,662</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>

              <li className={classes.one}>
                <img
                  className={classes.imgs}
                  src="/images/cufflink.png"
                  alt=""
                />
                <div className={classes.listHead}>
                  <h3 className={classes.listone}>cufflink jewellery</h3>
                  <h3 className={classes.price}>price: ₹35,662</h3>
                  <span className={classes.listTwo}>
                    The description of the item.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomJeweller;
