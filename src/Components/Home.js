import React from 'react';

import HoursCard from './HoursCard'
import { Container, Title } from '../Styles/Commons';

const cities = ['Rio', 'Beijing', 'Los Angeles'];

const Home = () => {
  return (
    <Container dir='column' bgColor='#DDEDF4'>
      <Title>The next hours in the world</Title>
        <Container dir='column' minHeight='200px'>
          {cities.map((city, index) => { 
            return <HoursCard key={index} city={city} index={index} title={city} />
          })}
        </Container>
    </Container>
  );
}

export default Home;
