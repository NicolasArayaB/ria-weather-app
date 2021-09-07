import React, { useContext, useEffect }  from 'react';
import { useParams } from 'react-router';

import Anchor from './Anchor';
import { Context } from '../Store/AppContext';

import { Container, Heading } from '../Styles/Commons';
import { Info, InfoCard } from '../Styles/HoursCard';

const HoursCard = (props) => {
  const { actions, store } = useContext(Context);
  const params = useParams();

  let localForecast = store.hourlyForecast[props.city] ? store.hourlyForecast[props.city].data : '';
  
  const cleanTime = (index) => (localForecast[index].timestamp_local).split('T')[1];
  const getIcon = (icon) => 'https://www.weatherbit.io/static/img/icons/' + icon + '.png';
  const forecast = () => actions.getHourlyForecast(props.city, props.hours || 4);

  useEffect(() => {
    forecast();
  }, []);

  return (
    <Container dir='column' bgColor='#1181B2' margin='2em 1em' shadow='5px 10px 8px #888888'>
      <Heading>{props.city}</Heading>
      <Info>
        {Array.isArray(localForecast) ? localForecast.map((localHourly, index)=>{
        return(
        <InfoCard key={index}>
          <Container>
            <h4>{cleanTime(index)}</h4>
          </Container>
          <Container dir='row' bgColor='#fff'>
            <Container >
              <img alt='weather icon' src={getIcon(localHourly.weather.icon)} />
            </Container>
            <Container margin='0 1.5em' dir='column' >
              <p>{localHourly.weather.description}</p>
              <p>{localHourly.temp}</p>
            </Container>
          </Container>
        </InfoCard>)
        }): ''}
      </Info>
      {params.city ? <Container minHeight='0.3em' /> : <Anchor city={props.city} /> }
    </Container>
  );
};

export default HoursCard;