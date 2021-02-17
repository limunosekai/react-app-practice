import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import burgerBuilderReducer from './section8/store/reducers/burgerBuilder';
import orderReducer from './section8/store/reducers/order';
import authReducer from './section8/store/reducers/auth';

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

// const logger = (store) => {
//   // store를 파라미터로 받음
//   return (next) => {
//     // 액션을 다음 미들웨어에게 전달, 다음 미들웨어가 없으면 리듀서에게 액션을 전달
//     return (action) => {
//       // 현재 처리하고 있는 액션
//       console.log(action);
//       const result = next(action);
//       console.log(store.getState());
//       return result;
//     };
//   };
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

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
