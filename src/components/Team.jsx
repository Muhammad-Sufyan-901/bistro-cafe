import React from "react";
import { motion } from "framer-motion";
import { teamData } from "../data/data";
import { fadeIn } from "../utils/variants";

function Team() {
  const { pretitle, title, sub1, sub2, name, occupation, signatureImg, chefImg } = teamData;

  return (
    <section className="relative top-96 z-10 lg:top-[480px] min-h-[720px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView="show"
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-[60px]">{sub1}</p>
            <p>{sub2}</p>
            <div className="my-[26px]">
              <div className="text-2xl capitalize font-semibold text-accent">{name}</div>
              <div className="text-[15px] font-semibold capitalize text-grey/70">{occupation}</div>
            </div>
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <img
                src={signatureImg}
                alt="Signature Pics"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView="show"
            className="flex-1"
          >
            <img
              src={chefImg}
              alt="Chef's Pics"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Team;
