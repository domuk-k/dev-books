import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { History } from "history";
import Add from "./Add";
import Home from "./Home";
import SignIn from "./SignIn";

interface Props {
  history: History<unknown>;
}

const Routes: React.FC<Props> = (props) => {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path="/add" component={Add} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
