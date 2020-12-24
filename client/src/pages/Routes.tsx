import React, { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { History } from 'history';
import Add from './Add';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useDispatch } from 'react-redux';
import { startAuth } from '../app/modules/auth/saga/saga';
import BookPage from './BookPage';

interface Props {
  history: History<unknown>;
}

const Routes: React.FC<Props> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAuth());
  }, [dispatch]);

  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path="/book/:id" component={BookPage} />
        <Route path="/add" component={Add} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
