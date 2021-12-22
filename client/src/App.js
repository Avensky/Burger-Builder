import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Routes, Navigate } from 'react-router-dom';
import { withRouter } from './hoc/withRouter';
import { connect } from 'react-redux';
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/index';
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {

  componentDidMount () {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" exact="true" element={<BurgerBuilder />} />
      </Routes>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Routes>
          <Route path="/checkout"       element={<Checkout />} />
          <Route path="/orders"         element={<Orders />} />
          <Route path="/logout"         element={<Logout />} />
          <Route path="/auth"           element={<Auth />} />
          <Route path="/" exact="true"  element={<BurgerBuilder />} />
        </Routes>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );