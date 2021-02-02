import React, { Component } from 'react';
// import Layout from './section8/hoc/Layout/Layout';
// import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';
// import Blog from './section9/containers/Blog/Blog';
import Control from './section11/Control';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Layout>
      //     <BurgerBuilder />
      //   </Layout>
      // </div>
      <BrowserRouter>
        <div className='App'>
          <Control />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
