import React from 'react';
import Add from './pages/Add';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/customTheme';
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <ChakraProvider resetCSS={true} theme={customTheme}>
          <BrowserRouter>
            <Switch>
              <Route path="/add" component={Add} />
              <Route path="/signin" component={SignIn} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </ChakraProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
