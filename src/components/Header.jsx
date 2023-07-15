import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, navVariants, headerVariants } from "../utils/variants";
import { Nav, Socials } from "./index";
import { navData, socialData } from "../data/data";
import LogoWhite from "../assets/img/header/logo-white.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });

  return (
    <motion.header
      variants={headerVariants}
      animate={isScrolled ? "show" : ""}
      initial="hidden"
      className="fixed w-full max-w-[1800px] z-50 py-4 bg-pink-200/20"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate="show"
        className="container mx-auto"
      >
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={`${isNavOpen ? "gap-y-0" : "gap-y-2"} flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isNavOpen ? -45 : 0, translateY: isNavOpen ? 2 : 0 }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isNavOpen ? 45 : 0 }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="order-1 lg:order-none lg:ml-[11rem]"
          >
            <a href="/#">
              <img
                src={LogoWhite}
                className={isScrolled ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"}
                alt="Navbar Logo"
              />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials socialData={socialData} />
          </motion.div>
          <motion.div
            variants={navVariants}
            animate={isNavOpen ? "show" : ""}
            initial="hidden"
            className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
          >
            <Nav navData={navData} />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
