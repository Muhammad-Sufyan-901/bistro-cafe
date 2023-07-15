import React, { useState } from "react";
import { FaUser, FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { reservationData } from "../data/data";
import { fadeIn, staggerContainer } from "../utils/variants";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "../timepicker/timepicker.css";

function Reservation() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");

  const { title, subtitle, modelImg, btnText } = reservationData;

  return (
    <section className="relative top-96 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="h2 capitalize"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="mb-8 text-dark"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-8"
          >
            <img
              src={modelImg}
              alt="Model Pics"
            />
          </motion.div>
        </motion.div>
        <motion.form
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input"
              />
            </div>
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                clearIcon={false}
                clockIcon={false}
                onChange={setStartTime}
                value={startTime}
                className="input"
              />
            </div>
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUser />
                <div>How Many People</div>
              </div>
              <input
                type="text"
                placeholder="1"
                className="input"
              />
            </div>
          </div>
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className="btn capitalize w-full lg:w-auto">{btnText}</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Reservation;
