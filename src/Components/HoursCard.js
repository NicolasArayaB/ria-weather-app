import React, { useContext, useEffect }  from 'react';
import { useParams } from 'react-router';

import { Context } from '../Store/AppContext';
import { Container, Info, InfoCard, Heading } from '../Styles/Commons';
import Anchor from './Anchor';

const HoursCard = (props) => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  
  let localForecast = store.hourlyForecast[props.city] ? store.hourlyForecast[props.city].data : '';
  
  const cleanTime = (index) => {
    let time = (localForecast[index].timestamp_local).split('T')[1]
    return time;
  }

  const getIcon = (icon) => 'https://www.weatherbit.io/static/img/icons/' + icon + '.png'

  const forecast = () => actions.getHourlyForecast(props.city, props.hours || 4)

  useEffect(() => {
    forecast();
  }, []);

  return (
    <Container dir='column' bgColor='#99EEFF' margin='2em 1em' shadow='5px 10px 8px #888888'>
      <Heading>{props.title}</Heading>
      <Info>
        {Array.isArray(localForecast) ? localForecast.map((localHourly, index)=>{
        return(
        <InfoCard key={index}>
          <Container>
            <h4>{cleanTime(index)}</h4>
          </Container>
          <Container className='single' dir='row'>
            <img alt='weather icon' src={getIcon(localHourly.weather.icon)} />
            <Container dir='column'>
              <p>{localHourly.weather.description}</p>
              <p>{localHourly.temp}</p>
            </Container>
          </Container>
        </InfoCard>)          
        }): ''}
      </Info>
      {params.city ? '' : <Anchor city={props.city} /> }
    </Container>
  );
}

export default HoursCard;