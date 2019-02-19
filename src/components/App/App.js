import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from "react-router-dom";
import Fader from '../Fader/Fader';
//routes
import Main from '../../routes/Main/Main';
import Login from '../../routes/Login/Login';
import Page404 from '../../routes/404/404';
import Register from '../../routes/Register/Register';
import Document from '../../routes/Document/Document';
//styles
import './App.scss';
//actions
import { startApp } from '../../store/reducers/appReducer';


class App extends Component {

  componentDidMount() {
    const { startApp } = this.props;
    startApp();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            withAuthentication
            component={Main}
          />

          <Route
            path='/login'
            component={Login}
          />

          <Route
            path='/register'
            component={Register}
          />

          <Route
            path='/document'
            component={Document}
          />

          <Route
            component={Page404}
          />
        </Switch>

        <Fader />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    user: state.user.user
  }
}

const mapDispatchToProps = {
  startApp
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

