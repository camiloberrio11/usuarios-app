import React from 'react';
import Header from './components/Header'
import ButtonGetUsuario from './components/ButtonGetUsuario'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header></Header>
      <ButtonGetUsuario></ButtonGetUsuario>
    </Router>
  );
}

export default App;
