import { motion } from "framer-motion";
import styles from "../style";
import { bajublr, b, s, d, baju, color } from "../assets";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

import BtnCart from "./btnCart";

const Hero = () => {
  return (
    // heroo awal
    <section
      id="home"
      className={`flex md:flex-row flex-col sm:py-16 py-10 relative `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative `}
      >
        {/* text */}
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-between items-center w-full "
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[22px] text-[32px] ss:px-5 px-5 text-white ss:leading-[80.8px] leading-[75px] z-[10]">
            Choose product
          </h1>
        </motion.div>

        {/* deskripsi */}
        <motion.p
          variants={textVariant(1.1)}
          className={`${styles.paragraph} max-w-[410px] mt-1 ss:px-1 z-[999] text-justify text-center mx-5 z-[10]`}
        >
          Choose a tshirt that matches your personal style and complements your
          wardrobe
        </motion.p>

        {/* color */}
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 2)}
          src={color}
          alt="color"
          className="ss:w-[30%] w-[40%] mx-6 relative z-[5]"
        ></motion.img>

        {/* harga */}
        <motion.h1
          variants={textVariant(1.1)}
          className="flex flex-row-reverse font-poppins font-semibold ss:text-[22px] text-[22px] ss:px-5 px-5 text-white ss:leading-[80px] leading-[55px]  "
        >
          $11
        </motion.h1>

        {/* txt darksoul */}
        <motion.h1
          variants={textVariant(1.1)}
          className="flex flex-row-reverse font-poppins font-semibold ss:text-[32px] text-[32px] ss:px-5 px-5 text-white ss:leading-[11px] leading-[25px] "
        >
          Dark Soul
        </motion.h1>

        {/* deskripsi */}
        <motion.p
          variants={textVariant(1.2)}
          className={`${styles.paragraph} max-w-[610px] mt-5 ss:px-1 z-[999]  text-start mx-5`}
        >
          Dark souls often spend a lot of time reflecting on their own thoughts
          and emotions, seeking to understand the darker aspects of themselves.
          A sense of sadness or melancholy can often be associated with a dark
          soul, as they tend to be more introspective and reflective
        </motion.p>

        {/* button */}
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 2)}
          className="flex flex-row "
        >
          <BtnCart styles={` mt-1 ml-5`} />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 ${styles.flexCenter} flex-row md:my-0 my-10 relative `}
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 2)}
          src={baju}
          alt="baju"
          className="w-[200%] h-[100%]  z-[5] justify-start "
        ></motion.img>

        {/* gambar content tengah */}

        {/* gradient start */}

        {/* white ditengah */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        {/* cyan */}

        <div className="absolute z-[0] w-[120%] h-[120%] -right-[94%] mt-[80%] rounded-full   gradient-02 " />
        {/* blue */}
        <div className="absolute z-[] w-[160%] h-[100%] -left-[150%] -mt-[150%] rounded-full   gradient-07 " />

        {/* gradient end */}

        {/* bulat 1 */}
        <div className=" absolute z-[1] border border-gray-300 w-[80%] h-[68%] rounded-full object-contain -mt-[17%] -left-[40%]  opacity-5" />

        {/* bulat 2 */}
        <div className=" absolute z-[1] border border-gray-300 w-[115%] h-[100%] rounded-full object-contain -mt-[15%] -left-[58%]  opacity-5" />

        {/* bulat 3 */}
        <div className=" absolute z-[1] border border-gray-300 w-[170%] h-[152%] rounded-full object-contain -mt-[15%] -left-[88%]  opacity-5" />
      </motion.div>

      {/* section baju blur */}
      {/* <div
        className={`flex-1 ${styles.flexCenter} flex-col md:my-0 my-10 relative`}
      >
        <img
          src={bajublr}
          alt="bajublr"
          className="w-[100%] h-[100%] relative z-[5]"
        ></img>
      </div> */}
    </section>
  );
};

export default Hero;
