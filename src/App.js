import React from 'react';
import './App.css';
import Appbar  from './components/Appbar'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './components/Cart'
import {Provider} from 'react-redux'
import {Store} from './Redux/Store'
import Reciepe from './components/Reciepe';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Provider store={Store}>
      <Appbar/>
      <Switch>
      <Route path="/" exact component={Shop}/>
      <Route path="/cart"  component={Cart}/>
      <Route path="/Reciepe"  component={Reciepe}/>
      </Switch>
      </Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;