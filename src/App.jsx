import React from 'react';
import { Route } from 'react-router-dom';
import routes from 'config/routes';
import './main.css';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const App = () =>
  routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />);

export default App;
