import { combineReducers } from 'redux';

import app from './appReducer';
import fader from './faderReducer';
import user from './userReducer';
import documents from './documentsReducer';

const reducers = {  
  app,
  fader,
  user,
  documents
};

export default combineReducers(reducers);