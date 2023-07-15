import React from "react";
import { motion } from "framer-motion";
import { menuData } from "../data/data";
import { fadeIn, staggerContainer } from "../utils/variants";

function Menu() {
  const { title, subtitle, modelImg, btnText, menuItems } = menuData;

  return (
    <section className="min-h-[780px]">
      <div className="bg-menu h-[780px] absolute w-full max-w-[1800px] -z-0" />
      <div className="relative z-10 top-72 lg:top-52">
        <motion.div
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.1 }}
          initial="hidden"
          whileInView="show"
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize text-white max-w-[400px]"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <img
              src={modelImg}
              alt="Model Pics"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 1.6, ease: "easeOut" }}
        className="relative top-80 lg:top-96"
      >
        <div className="container mx-auto">
          <div className="lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
              {menuItems.map(({ image, name, price, description }, index) => (
                <div key={index}>
                  <div className="flex flex-row lg:flex-col h-full">
                    <div className={`${index % 2 !== 0 ? "lg:order-1" : "order-none"} w-[45%] md:w-auto`}>
                      <img
                        src={image}
                        alt="Menu Pics"
                      />
                    </div>
                    <div className="bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-dark xl:text-2xl">{name}</div>
                        <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold">{price}</div>
                        <div>{description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="btn mx-auto capitalize">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Menu;
