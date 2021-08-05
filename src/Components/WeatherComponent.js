import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Row = styled.div`
  // background-color: #999;
  border-radius: 10px;
  height: 8px;
  margin-top: 12px;
  width: 100%;
`

const WeatherComponent = (props) => {
  return(
    <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Row>Llamar api segun ciudad {props.city}</Row>
    </motion.div>
  )
}

 export default WeatherComponent;