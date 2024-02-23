/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Designer-Jewellery.module.css";
import Link from "next/link";

function DesignerJewellery() {
  return (
    <>
      <h1 className={classes.heading}>Designer-Jewellery</h1>

      <section className={classes.section}>
        <div className={classes.newCollection}>
          <div className={classes.left}></div>
          <div className={classes.right}></div>
          <div className={classes.midddle}>
            <div className={classes.midTitle}>
              <h2 className={classes.title}>
                New
                {/* <br /> */}
                <div className={classes.collection}>Collection</div>
              </h2>
              <Link className={classes.productLink} href="Custom-Jewellery">
                - View products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS SECTION 2 */}
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.sectionHead}>
            <h2>Designer JEWELRY</h2>
            <p>Explore Design</p>
          </div>
          <div className={classes.collectionList}>
            <ul>
              <li>
                <img
                  className={classes.image}
                  src="	https://cdn0.rubylane.com/shops/2heartsjewelry/TRI369.1L.jpg"
                  alt=""
                />
                <div className={classes.head}>
                  <h3>Bracelets</h3>
                  <span>The description of the item.</span>
                </div>
              </li>

              <li>
                <img
                  className={classes.image}
                  src="https://www.pngmart.com/files/1/Jewellery-Ring-PNG-Clipart.png"
                  alt=""
                />
                <div className={classes.head}>
                  <h3>Bracelets</h3>
                  <span>The description of the item.</span>
                </div>
              </li>

              <li>
                <img
                  className={classes.image}
                  src="https://s-media-cache-ak0.pinimg.com/originals/c9/89/55/c98955bbb6331b4aa98cf33bdc84a84a.png"
                  alt=""
                />
                <div className={classes.head}>
                  <h3>Bracelets</h3>
                  <span>The description of the item.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THIS IS SECTION 3 */}

      <section className={classes.sections}>
        <section className={classes.cardOne}></section>
        <section className={classes.cardTwo}>
          <div className={classes.cardTitles}>
            <h3>Designer Name</h3>
            <p>Details about the product goes here.</p>
            <Link className={classes.home} href="Custom-Jewellery">
              - View more
            </Link>
          </div>
        </section>

        {/* THIS IS SECTION 4 */}

        <section className={classes.cardThree}>
          <div className={classes.cardtitle}>
            <h3>Designer Name</h3>
            <p>Details about the product goes here.</p>
            <Link className={classes.home} href="Custom-Jewellery">
              - View more
            </Link>
          </div>
        </section>

        {/* THIS IS SECTION 5 */}

        <section className={classes.cardFour}></section>
      </section>

      {/* THIS IS SECTION 6 */}

      <section className={classes.gallery}>
        <div className={classes.contain}>
          <div className={classes.sectionHed}>
            <h2>Designer Gallery</h2>
            <p>Explore Design</p>
          </div>
          <ul className={classes.showCard}>
            <li className={classes.Cards}>
              <figure className={classes.cardFigure}>
                <img
                  className={classes.cardImage}
                  src="https://static.pexels.com/photos/265856/pexels-photo-265856.jpeg"
                  alt=""
                />
              </figure>
            </li>

            <li className={classes.Cards}>
              <figure className={classes.cardFigure}>
                <img
                  className={classes.cardImage}
                  src="	https://static.pexels.com/photos/230290/pexels-photo-230290.jpeg"
                  alt=""
                />
              </figure>
            </li>

            <li className={classes.Cards}>
              <figure className={classes.cardFigure}>
                <img
                  className={classes.cardImage}
                  src="https://static.pexels.com/photos/248077/pexels-photo-248077.jpeg"
                  alt=""
                />
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default DesignerJewellery;
