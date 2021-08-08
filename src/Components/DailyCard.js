import React, { useContext, useEffect }  from 'react';
import { useParams } from 'react-router';

import { Context } from '../Store/AppContext';
import Anchor from './Anchor';

import { Heading } from '../Styles/Commons';
import { TableWrapper } from '../Styles/DailyCard';


const DailyCard = (props) => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  
  let localForecast = store.dailyForecast[props.city] ? store.dailyForecast[props.city].data : '';

  const getIcon = (icon) => 'https://www.weatherbit.io/static/img/icons/' + icon + '.png'
  const forecast = () => actions.getDailyForecast(props.city, props.days || 5)
  const cleanDate = (index) => (localForecast[index].valid_date).split('-').reverse().join('/');

  useEffect(() => {
    forecast();
  }, []);

  return (
    <TableWrapper>
      <Heading>{props.title}</Heading>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Min/Max Temperature</th>
            <th>Dew Point</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(localForecast) ? localForecast.map((localDaily, index)=>{
          return(
          <tr key={index}>
            <td>
              <p>{cleanDate(index)}</p>
            </td>
            <td>
              <img alt='weather icon' src={getIcon(localDaily.weather.icon)} />
              <p>{localDaily.weather.description}</p>
            </td>
            <td>
              <p>{localDaily.temp} °C</p>
            </td>
            <td>
              <p>{localDaily.min_temp + ' / ' + localDaily.max_temp}</p>
            </td>
            <td>
              <p>{localDaily.dewpt}</p>
            </td>
          </tr>)
          }) : ''}
        </tbody>
      </table>
      { params.city ? '' : <Anchor city={props.city} /> }
    </TableWrapper>
  );
}

export default DailyCard;