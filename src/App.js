import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './section8/hoc/Layout/Layout';
import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './section8/containers/Checkout/Checkout';
import Orders from './section8/containers/Orders/Orders';
import Auth from './section8/containers/Auth/Auth';
import logout from './section8/containers/Auth/Logout/Logout';
import * as actions from './section8/store/actions/index';

// import Blog from './section9/containers/Blog/Blog';
// import Control from './section11/Control';
// import Counter from './section14/containers/Counter/Counter';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    // 인증 안된 사용자 접속시
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    // 인증된 사용자 접속시
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/logout' component={logout} />
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
