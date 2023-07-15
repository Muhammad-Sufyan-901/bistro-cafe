import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../data/data";
import { fadeIn, plateVariants, staggerContainer } from "../utils/variants";

function About() {
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        <motion.div
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.6 }}
          initial="hidden"
          whileInView="show"
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn capitalize mx-auto lg:mx-0">{btnText}</button>
          </motion.div>
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img
              src={image}
              alt="About Pics"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
