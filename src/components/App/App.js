import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from "react-router-dom";
import Main from '../../routes/Main/Main';
import Fader from '../Fader/Fader';

import { startApp } from '../../store/reducers/appReducer';

import './App.scss';

class App extends Component {

  componentDidMount() {
    this.props.startApp();
  }

  render() {
    return (
      <div className="App">                    
        <Route path='/' component={Main} />
        <Fader />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started
  }
}

const mapDispatchToProps = {
  startApp
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

