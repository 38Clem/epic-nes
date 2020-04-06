import React from 'react';
import './App.css';
import '@openfonts/press-start-2p_all'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './Page/Start';
import Story from './Page/Story';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Start/>
      </Route>
      <Route exact path="/story">
        <Story />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
