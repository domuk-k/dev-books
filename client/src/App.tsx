import React from 'react';
import ErrorPage from './pages/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/customTheme';
import { Provider } from 'react-redux';
import configStore from './app/store';
import { createBrowserHistory } from 'history';
import Routes from './pages/Routes';

const history = createBrowserHistory();

const App: React.FC = () => {


  return (
    <Provider store={configStore(history)}>
      <>
        <ChakraProvider theme={customTheme}>
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes history={history} />
          </ErrorBoundary>
        </ChakraProvider>
      </>
    </Provider>
  );
};

export default App;
