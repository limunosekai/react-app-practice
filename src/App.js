import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './section8/hoc/Layout/Layout';
import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';
import logout from './section8/containers/Auth/Logout/Logout';
import * as actions from './section8/store/actions/index';
import asyncComponent from './section8/hoc/asyncComponent/asyncComponent';

// import Blog from './section9/containers/Blog/Blog';
// import Control from './section11/Control';
// import Counter from './section14/containers/Counter/Counter';

// lazy loading
const asyncCheckout = asyncComponent(() => {
  return import('./section8/containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./section8/containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./section8/containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    // 인증 안된 사용자 접속시
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    // 인증된 사용자 접속시
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={asyncCheckout} />
          <Route path='/orders' component={asyncOrders} />
          <Route path='/logout' component={logout} />
          <Route path='/auth' component={asyncAuth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
      // <BrowserRouter>
      //   <div className='App'>
      //     <Control />
      //   </div>
      // </BrowserRouter>
      // <div>
      //   <Counter />
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
