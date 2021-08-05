import React, { useState }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WeatherComponent from "./WeatherComponent";


const City = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} value={props.city} >
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <WeatherComponent city={props.city} />}</AnimatePresence>
    </motion.li>
  );
}

export default City;