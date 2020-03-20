import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout.jsx';
import {Route} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' exact component={Orders} />
          <Route path='/' exact component={BurgerBuilder} />
        </Layout>
      </div>
    );      
  }
}

export default App;
