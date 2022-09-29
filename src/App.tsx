import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from 'pages/Home';
import store, { persistor } from 'redux/store';
import MuiThemeProvider from 'theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
