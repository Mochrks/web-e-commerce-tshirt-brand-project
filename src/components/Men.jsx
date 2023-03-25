import styles from "../style";
import { layout } from "../style";
import { throne, selena, tv, sv, model } from "../assets";
import { motion } from "framer-motion";
import Button from "./Button";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const Men = () => (
  <section
    id="men"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow `}
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
        className={`${styles.heading2} sm:text-end text-center pt-2`}
      >
        Men Product.
      </motion.h2>

      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          className={`${styles.paragraph} max-w-[100%] sm:text-end text-center pt-2`}
        >
          Our tshirts for men are designed to be stylish and on-trend, offering
          a range of designs to suit any personal style or fashion taste.Our
          tshirts for men offer great value for money, with high-quality
          materials, stylish designs, and durable construction, all at an
          affordable price
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-row"
      >
        <div className="w-full flex sm:flex-row flex-col ">
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={throne}
              alt="throne"
              className="w-[100%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={selena}
              alt="selena"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={tv}
              alt="nft"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={sv}
              alt="nft"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        className="py-16"
      >
        <Button />
      </motion.div>

      {/* <div className="absolute z-[1] sm:-left-[45%] -left-[300%] -bottom-[93px] z-0">
        <img src={model} alt="" className="w-[500px] " />
      </div> */}
    </motion.div>
  </section>
);

export default Men;
