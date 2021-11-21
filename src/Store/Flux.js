const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      hourlyForecast: [],
      dailyForecast: [],
    },

    actions: {
      getHourlyForecast: async (city, hours) => {
        const url = 'https://api.weatherbit.io/v2.0/forecast/hourly?city=' + city + '&hours=' + hours + '&key=af298da3a71c4c7e932b45a24d2cd659';

        const request = await fetch(url);
        const data = await request.json();

        let store = getStore().hourlyForecast;
        setStore({ hourlyForecast: { ...store, [city]: data } })
      },

      getDailyForecast: async (city, days) => {
        const url = 'https://api.weatherbit.io/v2.0/forecast/daily?days=' + days + '&city=' + city + '&key=af298da3a71c4c7e932b45a24d2cd659';
        const request = await fetch(url);
        const data = await request.json();
        let store = getStore().dailyForecast;
        setStore({ dailyForecast: { ...store, [city]: data } })
      }
    }
  }
};

export default getState;
