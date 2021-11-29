import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { publicRoutes, RouteNames } from '.';

const Router: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.MAIN} />
    </Switch>
  );
};

export default Router;
