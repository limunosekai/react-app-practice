import React, { Component } from 'react';
import Layout from './section8/hoc/Layout/Layout';
import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';
// import Blog from './section9/containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
      // <div className='App'>
      //   <Blog />
      // </div>
    );
  }
}

export default App;
