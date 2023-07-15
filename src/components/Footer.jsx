import React from "react";
import { motion } from "framer-motion";
import { Newsletter, Copyright, Socials } from "./index";
import { footerData, newsletterData } from "../data/data";
import { fadeIn, staggerContainer } from "../utils/variants";

function Footer() {
  const {
    contact: { title: contactTitle, address: contactAddress, phone: contactPhone },
    hours: { title: hoursTitle, program: hoursProgram },
    social: { title: socialTitle, icons: socialData },
  } = footerData;
  const { title: newsletterTitle, subtitle: newsletterSubtitle, placeholder: newsletterPlaceholder, btnText: newsletterBtnText } = newsletterData;

  return (
    <footer className="relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="h-full flex flex-col gap-y-4"
        >
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <Newsletter
              title={newsletterTitle}
              subtitle={newsletterSubtitle}
              placeholder={newsletterPlaceholder}
              btnText={newsletterBtnText}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            <div className="flex-1 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{contactTitle}</div>
              <div className="captalize">{contactAddress}</div>
              <div className="captalize">{contactPhone}</div>
            </div>
            <div className="flex-1">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{hoursTitle}</div>
              <div className="flex gap-x-[46px]">
                {hoursProgram.map(({ days, hours }, index) => (
                  <div
                    key={index}
                    className="capitalize"
                  >
                    <div>
                      <div>{days}</div>
                      <div className="text-[20px] text-accent">{hours}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 lg:max-w-[280px] mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{socialTitle}</div>
              <Socials socialData={socialData} />
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
