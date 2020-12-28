import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Toast */
import { ToastContainer } from 'react-toastify';

/* Redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import store from './store';

/** Global Styles */
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <GlobalStyles />
        <Router>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
