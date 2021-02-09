import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './section8/store/reducer';
// import counterReducer from './section14/store/reducers/counter';
// import resultReducer from './section14/store/reducers/result';

// const rootReducer = combineReducers({
//   ctr: counterReducer,
//   res: resultReducer,
// });

// import axios from 'axios';

// axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (request) => {
//     console.log(request);
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
