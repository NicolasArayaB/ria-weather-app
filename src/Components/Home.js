import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

import City from './CityComponent'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <AnimateSharedLayout>
      <Wrapper>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {cities.map(city => (
            <City key={city} city={city} />
          ))}
        </motion.ul>  
      </Wrapper>
    </AnimateSharedLayout>
  );
}

export default Home;

const cities = ['Rio de Janeiro', 'Beijin', 'Los Angeles'];



