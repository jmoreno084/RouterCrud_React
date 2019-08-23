import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/Producto';



function App() {
  return (
      <Router>
        <Header />
        <main className="container mt-5">
          <Switch>
            <Route exact path="/nuevo-producto" component={AgregarProducto}/>
            <Route exact path="/productos" component={Productos}/>
            <Route exact path="/productos/:id" component={Producto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          </Switch>
          <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
        </main>
      </Router>
  );
}

export default App;
