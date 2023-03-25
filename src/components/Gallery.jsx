import {
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
  gal9,
} from "../assets";
import styles, { layout } from "../style";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Favourite = () => (
  <section
    id="favourite"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      <motion.h2
        variants={fadeIn("down", "tween", 0.2, 1.5)}
        className={`${styles.heading2} text-center tex-justify`}
      >
        Gallery
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={gal1}
          alt=""
          className="md:w-[290px] w-[200px] md:my-10  my-2 md:mx-10  mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={gal2}
          alt=""
          className="md:w-[300px] w-[200px] my-10 md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={gal3}
          alt=""
          className="md:w-[300px] w-[200px] md:my-10 my-2 md:mx-10 mx-2 object-contain"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={gal4}
          alt=""
          className="md:w-[290px] w-[200px]  my-2 md:mx-10 mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={gal5}
          alt=""
          className="md:w-[300px] w-[200px]  md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={gal6}
          alt=""
          className="md:w-[300px] w-[200px] my-5  md:mx-10 mx-2 object-contain"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={gal7}
          alt=""
          className="md:w-[290px] w-[200px]  md:mx-10  mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={gal8}
          alt=""
          className="md:w-[300px] w-[200px]  md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={gal9}
          alt=""
          className="md:w-[300px] w-[200px] my-5 md:mx-10 mx-2 object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Favourite;
