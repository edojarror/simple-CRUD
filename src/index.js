import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import rootReducers from './reducers/rootReducers';
import Router from './routes/Router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(rootReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.getState())}
      <Router />  
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
