import React from 'react';
import Header from './components/Header'
import ButtonGetUsuario from './components/ButtonGetUsuario'
import Usuarios from './components/Usuarios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <ButtonGetUsuario></ButtonGetUsuario>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/usuarios" component={Usuarios} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
