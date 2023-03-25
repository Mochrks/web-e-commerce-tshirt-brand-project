import styles from "../style";
import { layout } from "../style";
import { model, hypo, angel, eufo } from "../assets";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const Women = () => (
  <section
    id="women"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px]  `}
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
        className={`${styles.heading2} sm:text-start text-center pt-2`}
      >
        Women Product.
      </motion.h2>

      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          className={`${styles.paragraph} max-w-[100%] sm:text-start text-center pt-2`}
        >
          Our tshirts for women are designed to be stylish and on-trend, with a
          range of colors, designs, and patterns to suit any personal style or
          fashion taste. Our tshirts for women are built to last, with strong
          seams and high-quality materials that can withstand repeated wear and
          washing
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
              src={hypo}
              alt="throne"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={angel}
              alt="selena"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={angel}
              alt="nft"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={eufo}
              alt="nft"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
        </div>

        {/* bg gradient */}
        <div className="absolute z-[0] w-[130%] h-[30%] -left-[4%]  rounded-full   gradient-01 " />
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

export default Women;
