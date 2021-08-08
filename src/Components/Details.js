import React from 'react';
import { useParams } from "react-router-dom";

import HoursCard from './HoursCard';
import DailyCard from './DailyCard';
import Anchor from './Anchor';

import { Container, Title } from '../Styles/Commons';

const Details = () => {
  const params = useParams();
  let hours = 4;
  let days = 4;

  return(
    <Container dir='column' bgColor='#DDEDF4' margin='0'>
      <Title>{params.city === 'rio'|| params.city === 'Rio' ? 'Rio de Janeiro' : params.city}</Title>
      <Container dir='column' minHeight='200px'>
        <HoursCard city={params.city} hours={hours} title={`Next ${hours} hours`} />
      </Container>
      <Container dir='column' minHeight='200px'>
        <DailyCard city={params.city} days={days} title={`Next ${days} days`} />
      </Container>
      { !params.city ? '' : <Anchor /> }
    </Container>
  )
};

export default Details;
