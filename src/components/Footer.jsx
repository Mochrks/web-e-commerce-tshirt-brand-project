import styles from "../styles/style";
import { footer } from "../assets";
import { footerLinks, socialMedia } from "../apis";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative overflow-hidden`}
  >
    {/* Background Gradient Effects */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 opacity-50" />
    <div className="absolute z-[0] w-[40%] h-[40%] -left-[20%] rounded-full ungu__gradient bottom-20 opacity-30" />

    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-12 w-full z-[1]`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={footer}
          alt="poetic_logo"
          className="w-[200px] h-[72px] object-contain transition-transform hover:scale-105 cursor-pointer"
        />
        <p className={`${styles.paragraph} mt-6 max-w-[312px] text-[16px]`}>
          Elevating your style with poetic essence. Premium quality t-shirts
          designed for the modern soul.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white relative w-fit mb-6">
              {footerlink.title}
              <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-secondary rounded-full" />
            </h4>
            <ul className="list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-all duration-300 hover:translate-x-2 ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  onClick={() => window.open(link.link)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div className="flex flex-col ss:my-0 my-4 min-w-[260px]">
          <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white relative w-fit mb-6">
            Stay Inspired
            <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-secondary rounded-full" />
          </h4>
          <p className="font-poppins font-normal text-[14px] text-dimWhite mb-5">
            Join the POETIC circle for exclusive drops and poetic stories.
          </p>
          <div className="flex flex-row items-center p-1.5 bg-gray-gradient rounded-[12px] w-full border border-gray-800 focus-within:border-secondary transition-all">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-none outline-none text-white font-poppins text-[14px] px-4 w-full placeholder:text-gray-500"
            />
            <button className="bg-blue-gradient text-primary font-poppins font-bold py-2.5 px-5 rounded-[10px] text-[12px] uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-8 border-t-[1px] border-t-[#3F3E45] z-[1]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2023 Mochrks. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div
            key={social.id}
            className={`w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-gray-gradient border border-gray-800 cursor-pointer transition-all duration-300 hover:bg-blue-gradient hover:border-transparent hover:scale-110 hover:-translate-y-1 group ${
              index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[22px] h-[22px] object-contain transition-all group-hover:brightness-0"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
