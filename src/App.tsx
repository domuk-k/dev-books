import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './pages/Add';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={Add} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
