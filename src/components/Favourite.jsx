import { fav1, fav2, fav3 } from "../assets";
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
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}
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
        Looking for favourite t-shirt?
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
          src={fav1}
          alt=""
          className="md:w-[290px] w-[200px] md:my-10  my-2 md:mx-10  mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={fav2}
          alt=""
          className="md:w-[300px] w-[200px] my-10 md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={fav3}
          alt=""
          className="md:w-[300px] w-[200px] md:my-10 my-2 md:mx-10 mx-2 object-contain"
        />
      </motion.div>

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1.5)}
        className={`${styles.paragraph} max-w-[700px] mt-10 text-center`}
      >
        Look for a design that is unique and original, reflecting your
        individuality and personality, hoose a design that can be worn with a
        variety of outfits and in a range of settings, whether it's for casual
        wear or a special occasion.
      </motion.p>
    </motion.div>
  </section>
);

export default Favourite;
