import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Demo from './pages/Demo';
import ServerSide1 from './pages/ServerSide1';
import ServerSide2 from './pages/ServerSide2';
import ClientSide1 from './pages/ClientSide1';
import ClientSide2 from './pages/ClientSide2';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path="/">
          <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Homepage} />
      <Route path="/serverside1" component={ServerSide1} />
      <Route path="/serverside2" component={ServerSide2} />
      <Route path="/clientside1" component={ClientSide1} />
      <Route path="/clientside2" component={ClientSide2} />
      <Route path="/demo" component={Demo}/>
    </Router>
  );
}


