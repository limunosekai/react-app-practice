import React, { Component } from 'react';
// import Layout from './section8/hoc/Layout/Layout';
// import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './section8/containers/Checkout/Checkout';
// import Orders from './section8/containers/Orders/Orders';
// import { Route, Switch } from 'react-router-dom';

// import Blog from './section9/containers/Blog/Blog';
// import Control from './section11/Control';
import Counter from './section14/containers/Counter/Counter';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Layout>
      //     <Switch>
      //       <Route path='/checkout' component={Checkout} />
      //       <Route path='/orders' component={Orders} />
      //       <Route path='/' exact component={BurgerBuilder} />
      //     </Switch>
      //   </Layout>
      // </div>
      // <BrowserRouter>
      //   <div className='App'>
      //     <Control />
      //   </div>
      // </BrowserRouter>
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
