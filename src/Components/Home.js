import React from 'react';

import HoursCard from './HoursCard';

import { Container, Title } from '../Styles/Commons';

const Home = ({ cities }) => {
  return(
    <Container dir='column' bgColor='#DDEDF4'>
      <Title>The next hours in the world</Title>
        <Container dir='column' minHeight='200px'>
          {cities.map((city, index) => {
            return <HoursCard key={index} city={city} index={index} />
          })}
        </Container>
    </Container>
  );
};

export default Home;
