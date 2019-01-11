import { combineReducers } from 'redux';

import app from './appReducer';
import fader from './faderReducer';

const reducers = {  
  app,
  fader
};

export default combineReducers(reducers);