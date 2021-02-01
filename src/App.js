import React, { Component } from 'react';
import Layout from './section8/hoc/Layout/Layout';
import BurgerBuilder from './section8/containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
