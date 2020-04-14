import React from 'react';
import Routes from "./Routes";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/index';

const store = createStore(postReducer);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
}

export default App;
