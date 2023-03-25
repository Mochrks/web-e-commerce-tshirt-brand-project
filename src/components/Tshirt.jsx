import styles from "../style";
import { layout } from "../style";
import {
  throne,
  selena,
  tv,
  sv,
  model,
  menu,
  arrowleft,
  arrowright,
  dot,
  hypo,
  angel,
  eufo,
} from "../assets";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const Tshirt = () => (
  <section
    id="tshirt"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white-gradient rounded-[20px] box-shadow `}
  >
    <div className="flex flex-col">
      <div className="flex flex-row">
        <img src={menu} alt="menu" className="sm:mx-10 mx-5 sm:py-1 py-5" />
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[21px] text-white text-start sm:py-1 py-5">
          Our best seller product
        </h2>
      </div>

      <div className="sm:flex-row flex-col">
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

        <div className="w-full flex sm:flex-row flex-col ">
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={hypo}
              alt="hypo"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={angel}
              alt="sangel"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={angel}
              alt="angel"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
          <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
            <img
              src={eufo}
              alt="eufo"
              className="w-[90%] h-[100%] relative z-[5] cursor-pointer"
            />
          </div>
        </div>
        {/* arrow button kanan kiri */}
        <div className="flex flex-row my-5 mx-5 justify-between">
          <img
            src={arrowleft}
            alt=""
            className="w-[50px] object-contain mx-2 my-5 cursor-pointer"
          />
          <img src={dot} alt="" className="w-[80px] object-contain mx-2 my-5" />
          <img
            src={arrowright}
            alt=""
            className="w-[50px] object-contain  mx-2 my-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Tshirt;
