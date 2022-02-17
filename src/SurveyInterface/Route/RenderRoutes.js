import { Switch, Route} from "react-router-dom";
import React from "react";
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route  component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }


  export default RenderRoutes;