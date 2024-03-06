/* eslint-disable @next/next/no-img-element */
// "use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
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
            {/*1 */}
            <ul className={classes.head}>
              <Link className={classes.cardTwo} href="Bracelet">
                <li className={classes.one} id="1">
                  <div className={classes.card}>
                    <div className={classes.front}>
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
                    </div>
                    <div className={classes.back}>
                      Bracelets are accessories worn around the wrist for
                      decorative, ornamental, or symbolic purposes. They come in
                      a wide variety of styles, materials, and designs, catering
                      to diverse tastes and occasions. Here are some common
                      types of bracelets,Bracelets are not only fashion
                      accessories but can also hold sentimental value,
                      representing personal style, cultural traditions, or
                      meaningful connections. They make for popular gifts and
                      are commonly used to commemorate special occasions
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>
              {/*2 */}
              <Link className={classes.cardTwo} href="Ring">
                <li className={classes.one} id="2">
                  <div className={classes.card}>
                    <div className={classes.front}>
                      <img
                        className={classes.imgs}
                        src="https:s-media-cache-ak0.pinimg.com/originals/27/41/69/274169b4444ccf7448d4133c13dd05c1.png"
                        alt=""
                      />
                      <div className={classes.listHead}>
                        <h3 className={classes.listone}>Rings</h3>
                        <h3 className={classes.price}>price: ₹13,004</h3>
                        <span className={classes.listTwo}>
                          The description of the item.
                        </span>
                      </div>
                    </div>
                    <div className={classes.back}>
                      Also called finger ring . a typically circular band of
                      metal or other durable material, especially one of gold or
                      other precious metal, often set with gems, for wearing on
                      the finger as an ornament, a token of betrothal or
                      marriage, etc.a similar band of metal or other durable
                      material worn as an ornament on another part of the body,
                      such as on the toe or in a piercing.
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>
              {/*3 */}
              <Link className={classes.cardTwo} href="Earrings">
                <li className={classes.one} id="3">
                  <div className={classes.card}>
                    <div className={classes.front}>
                      <img
                        className={classes.imgs}
                        src="https:s-media-cache-ak0.pinimg.com/originals/c9/89/55/c98955bbb6331b4aa98cf33bdc84a84a.png"
                        alt=""
                      />
                      <div className={classes.listHead}>
                        <h3 className={classes.listone}>Earrings</h3>
                        <h3 className={classes.price}>price: ₹7,028</h3>
                        <span className={classes.listTwo}>
                          The description of the item.
                        </span>
                      </div>
                    </div>
                    <div className={classes.back}>
                      An earring is any kind of ring, stud, hoop, or dangling
                      decoration that you clip on your earlobe or hook through a
                      hole pierced in your ear. Many people wear two matching
                      earrings, one in each lobe, although others have just one
                      pierced ear and wear a single earring — and some have
                      multiple piercings in which they can wear a variety of
                      earrings. In the 18th century, an earring that dangled was
                      called an ear-drop.
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>
              {/*4 */}
              <Link className={classes.cardTwo} href="Pendent">
                <li className={classes.one} id="4">
                  <div className={classes.card}>
                    <div className={classes.front}>
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
                    </div>
                    <div className={classes.back}>
                      pendant, in jewelry, ornament suspended from a bracelet,
                      earring, or, especially, a necklace. Pendants are derived
                      from the primitive practice of wearing amulets or
                      talismans around the neck. The practice dates from the
                      Stone Age, when pendants consisted of such objects as
                      teeth, stones, and shells.pendant may also hold a picture
                      or a lock of hair of protectively in front of the body and
                      near the heart, pendants have often had symbolic and
                      magical purposes.
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* this is section 2 */}

      <section className={classes.AllDatas}>
        <div className={classes.container}>
          <div className={classes.photosHeader}>
            <ul className={classes.head}>
              {/*5 */}
              <Link className={classes.cardTwo} href="Bangles">
                <li className={classes.one} id="5">
                  <div className={classes.card}>
                    <div className={classes.front}>
                      <img
                        className={classes.imgs}
                        src="/images/Bangles.png"
                        alt=""
                      />
                      <div className={classes.listHead}>
                        <h3 className={classes.listone}>Bangles jewellery</h3>
                        <h3 className={classes.price}>price: ₹5,69,415</h3>
                        <span className={classes.listTwo}>
                          The description of the item.
                        </span>
                      </div>
                    </div>
                    <div className={classes.back}>
                      Bangles are circular in shape, and, unlike bracelets, are
                      not flexible. The word is derived from Hindi bungri
                      (glass). They are made of numerous precious as well as
                      non-precious materials such as gold, silver, platinum,
                      glass, wood, ferrous metals, plastic, etc.
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>
              {/*6 */}
              <Link className={classes.cardTwo} href="Antique">
                <li className={classes.one} id="6">
                  <div className={classes.card}>
                    <div className={classes.front}>
                      <img
                        className={classes.imgs}
                        src="/images/ant.png"
                        alt=""
                      />
                      <div className={classes.listHead}>
                        <h3 className={classes.listone}>Antique jewellery</h3>
                        <h3 className={classes.price}>price: ₹6,57,282</h3>
                        <span className={classes.listTwo}>
                          The description of the item.
                        </span>
                      </div>
                    </div>
                    <div className={classes.back}>
                      In jewellery trade terms, antique describes a piece that
                      was made at least 100 years ago. That means that any
                      jewellery made around 1920 or before is technically
                      antique. In terms of the AJC collections, our Georgian,
                      Victorian, Edwardian and Art Nouveau jewellery is all
                      antique
                    </div>
                  </div>
                  <button className={classes.buy}>Buy Now</button>
                </li>
              </Link>

              {/*7 */}
              <li className={classes.one} id="7">
                <div className={classes.card}>
                  <div className={classes.front}>
                    <img
                      className={classes.imgs}
                      src="/images/brooch.png"
                      alt=""
                    />
                    <div className={classes.listHead}>
                      <h3 className={classes.listone}>Brooch</h3>
                      <h3 className={classes.price}>price: ₹1,999</h3>
                      <span className={classes.listTwo}>
                        The description of the item.
                      </span>
                    </div>
                  </div>
                  <div className={classes.back}>
                    A brooch is a small piece of jewellery which has a pin at
                    the back so it can be fastened on a dress, blouse, or coat.
                    Or simply buy a length of ribbon and secure the brooch to
                    the bow. Synonyms: badge, pin, clip, fastening More Synonyms
                    of brooch. Collins COBUILD Advanced Learners Dictionary.
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
              </li>
              {/*8 */}
              <li className={classes.one} id="8">
                <div className={classes.card}>
                  <div className={classes.front}>
                    <img
                      className={classes.imgs}
                      src="/images/kundan.png"
                      alt=""
                    />
                    <div className={classes.listHead}>
                      <h3 className={classes.listone}>Kundan jewellery</h3>
                      <h3 className={classes.price}>price: ₹8,242</h3>
                      <span className={classes.listTwo}>
                        The description of the item.
                      </span>
                    </div>
                  </div>
                  <div className={classes.back}>
                    Origins of Kundan jewelleries in India are dated back to at
                    least 3rd century BCE. Kundan started off in Rajasthan Royal
                    court and then flourished under royal patronage during the
                    Mughal era.Over the years, the Kundan jewellery of the
                    courts was successfully copied in silver in Rajasthan, Bihar
                    and the Punjab and became popular with the common man
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
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
              {/*9 */}
              <li className={classes.one} id="9">
                <div className={classes.card}>
                  <div className={classes.front}>
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
                  </div>
                  <div className={classes.back}>
                    Pure platinum is simply too hard to be used in jewelry.
                    Instead, platinum is alloyed with other metals in order to
                    retain the desirable properties, while making it easier to
                    work with. Higher quality jewelry is made from 95% pure
                    platinum; the other 5% most commonly consisting of iridium,
                    ruthenium, or cobalt. While the iridium blend is common, it
                    is also considered the lowest quality, as it is most likely
                    to scratch or chip.
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
              </li>
              {/*10 */}
              <li className={classes.one} id="10">
                <div className={classes.card}>
                  <div className={classes.front}>
                    <img
                      className={classes.imgs}
                      src="/images/Temple.png"
                      alt=""
                    />
                    <div className={classes.listHead}>
                      <h3 className={classes.listone}>Temple jewellery</h3>
                      <h3 className={classes.price}>price: ₹95,469</h3>
                      <span className={classes.listTwo}>
                        The description of the item.
                      </span>
                    </div>
                  </div>
                  <div className={classes.back}>
                    Temple jewellery is said to have originated in the Chola and
                    Pandya dynasties. In the early years, this kind of jewellery
                    was made out of precious metal donations made to temples in
                    south India and was meant to be reserved for adorning
                    deities and royals.This form of jewellery is in vogue among
                    young Indians who love its intricate designs that represent
                    the fusion of Indian tradition with modern designs.
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
              </li>
              {/*11 */}
              <li className={classes.one} id="11">
                <div className={classes.card}>
                  <div className={classes.front}>
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
                  </div>
                  <div className={classes.back}>
                    Filigree is a form of intricate metalwork found in jewellery
                    (as well as other decorative objects) which features
                    interwoven fine wire or threads, which have been coiled or
                    twisted to create exquisite patterns. These delicate
                    patterns or motifs are then soldered together to make all
                    kinds of jewellery such as earrings, necklaces, bracelets,
                    and rings.
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
              </li>
              {/*12 */}
              <li className={classes.one} id="">
                <div className={classes.card}>
                  <div className={classes.front}>
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
                  </div>
                  <div className={classes.back}>
                    Cufflinks are items of jewelry that are used to secure the
                    cuffs of dress shirts. Cufflinks can be manufactured from a
                    variety of different materials, such as glass, stone,
                    leather, metal, precious metal or combinations of these.
                    Securing of the cufflinks is usually achieved via toggles or
                    reverses based on the design of the front section, which can
                    be folded into position. There are also variants with chains
                    or a rigid, bent rear section. The front sections of the
                    cufflinks can be decorated with gemstones.
                  </div>
                </div>
                <button className={classes.buy}>Buy Now</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomJeweller;
