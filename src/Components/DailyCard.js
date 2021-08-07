import React, { useContext, useEffect }  from 'react';
import { useParams } from 'react-router';

import { Context } from '../Store/AppContext';
import { Container, Info, InfoCard, Heading } from '../Styles/Commons';
import Anchor from './Anchor';

const DailyCard = (props) => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  
  let localForecast = store.dailyForecast[props.city] ? store.dailyForecast[props.city].data : '';

  const getIcon = (icon) => 'https://www.weatherbit.io/static/img/icons/' + icon + '.png'

  const forecast = () => actions.getDailyForecast(props.city, props.days || 5)

  const cleanDate = (index) => {
    let date = (localForecast[index].valid_date).split('-').reverse().join('/');
    return date
  }

  useEffect(() => {
    forecast();
  }, []);

  return (
    <Container dir='column' bgColor='#99EEFF' margin='1em' shadow='5px 10px 8px #888888'>
      <Heading>{props.title}</Heading>
      <Info>
        {Array.isArray(localForecast) ? localForecast.map((localDaily, index)=>{
        return(
        <InfoCard key={index}>
          <Container>
            <h4>{cleanDate(index)}</h4>
          </Container>
          <Container className='single' dir='row'>
            <img alt='weather icon' src={getIcon(localDaily.weather.icon)} />
            <Container dir='column'>
              <p>{localDaily.weather.description}</p>
              <p>{localDaily.temp}</p>
            </Container>
          </Container>
        </InfoCard>)          
        }): ''}
      </Info>
      {params.city ? '' : <Anchor city={props.city} /> }
    </Container>
  );
}

export default DailyCard;