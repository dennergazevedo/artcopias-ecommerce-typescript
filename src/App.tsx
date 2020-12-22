import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* Redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import store from './store';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
