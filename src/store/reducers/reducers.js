import { combineReducers } from 'redux';

import app from './appReducer';
import fader from './faderReducer';
import user from './userReducer';

const reducers = {  
  app,
  fader,
  user
};

export default combineReducers(reducers);