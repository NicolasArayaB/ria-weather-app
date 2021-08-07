import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import injectContext from './Store/AppContext';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from './Components/Details';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    align-items: center;
    background-color: #fff; 
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-bottom: 0em;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    
    @media (max-width: 800px){
      font-size: 0.7em;
    }
  }

  #root {
    width: 100%;
  }
`

const App = () => {
  return(
    <div className='app'>
      <Router>
        <Header />
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/details/:city'>
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default injectContext(App);
