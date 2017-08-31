import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reduser from './redusers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './Components/App';

const store = createStore(reduser);

const MyApp = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <MyApp />, document.getElementById('root')
);