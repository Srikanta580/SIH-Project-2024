/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <a href="#" key={index}>
              <img className="h-20 w-56 pr-20" src={image} />
            </a>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <a href="#" key={index}>
              <img className="h-20 w-56 pr-20" src={image} />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
