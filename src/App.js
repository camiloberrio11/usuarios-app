import React from 'react';
import Header from './components/Header'
import ButtonGetUsuario from './components/ButtonGetUsuario'
import Usuarios from './components/Usuarios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header></Header>
      <ButtonGetUsuario></ButtonGetUsuario>
      <div className="container mt-5">
      <Route exact path="/usuarios" component={Usuarios} />
      </div>
    </Router>
  );
}

export default App;
