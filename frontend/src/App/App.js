import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import VistaDetalle from '../components/VistaDetalle/VistaDetalle'
import Album from '../components/Album/Album'

function App() {
  return (
    <Router>
    <Album />
    <Switch>
      <Route path="/" exact/>

      <Route path="/:name" component={VistaDetalle} />
    </Switch>

    </Router>
  );
}

export default App;
