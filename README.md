# Ria Weather App
#### Presentation Video: https://youtu.be/wY-8wZL8mRQ

## Description

This weather app was created with a Flux architecture using React utilizing a simple JSON rest API, so you can find on src/Store/Flux.js the end points.
I also used a component based architecture with Styled-Components so on src/Components you will find all the components and on src/Styles, some shared or the main CSS aplied.

I use 3 default cities to be shown, but It's ready to be scalable if a data base and authentication method is added.


## File description
  src/
    - index.js: Renders App view on index.html's div.root
    - App.js: Has the app logic, with React-Router it is responsible to always render the header and Switch between both main views components, Home and Details depending on the path.
    It has the cities array wich is send to Home component as a prop. Eventually we can append new cities to the array to show more cities.
    
  src/Components
    - Home.js: Has the view's title and each city's hourly weather forecast is been rendered via HoursCard component.
    
    -HoursCard.js: With useEffect, I'm calling the forecast function on load, wich uses actions from useContext to make the API call from Flux.js.
    The fetched data is stored and with useContext store, I'm storing that data on localForecast variable to be formatted, and rendered maping through each hour.
    At the end, if this component is been rendered on Details view, it will render an empty container just to be sure that the style of this page looks good, or if it's been rendered via Home, it will render the Anchor component, receivig city as a prop.

    Details.js: This view, also has a title but in this case, the api recognize 'Rio de Janeiro' as just 'Rio', so in that case, if params.city is 'Rio', it will render 'Rio de Janeiro' otherwise, it will render params.city.
    Then, this view renders the HoursCard giving it city name, number of hours to be fetch and the title variables as params.
    Also, it renders the DailyCard, wich recibes city name, how many days we want to fetch and the title to be shown.
    
    - DailyCard.js: This component is like the HourlyCard, but it renders more detailed information about the next day's forecast on a specific city.

    - Anchord.js: basically it's an anchor that dinamically change its purpose and how it looks depending on the props.

    - Header.js: The heather have two sections, the brand, wich consist on a link wrapping the logo and title and the search input field.
    The search field actually what it does is, onSubmit, format the input and redirecting to details and using the request to change the params.city, wich is used to fetch the API.

  src/Store
    - AppContext.js: Here I define the context, which will be injected to all the app.
    With useState hook I can define getStore to get the fetched data, getActions to make the API calls and setStore to store de fetched data.
    This will return the PassedComponent (in this case, App from App.js) within the context.

  Flux.js: In this file I put the two API endpoints. here I define, using getStore, get Action and setStore, the store, where I store the fetched data, and actions, that makes the action of fetching the data.

  src/Styles
    In this folder I put the main styles used on the app, for the two views and some Commons that I used and re-used through the diferent components, like the container wich is customizable on size, background-color and other properties.  

You can find it on [this online demo](https://ria-weather-app.netlify.app/)

---

## Installation

- Download the repository by running: `git clone https://github.com/NicolasArayaB/ria-weather-app.git`

- Install project dependencies executing: `npm install`

- Run application on localhost executing: `npm start`