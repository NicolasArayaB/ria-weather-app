import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import injectContext, { Context } from './Store/AppContext';
import Header from './Components/Header';
import Home from './Components/Home';
// import WeatherComponent from './Components/WeatherComponent'
import './index.css'

const App = () => {
  const { store } = useContext(Context);

  return(
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default injectContext(App);
