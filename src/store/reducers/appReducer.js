import { handleActions, createAction } from 'redux-actions';

const defaultState = {
    started: false
};

export const startApp = createAction('APP_START');

const appReducer = handleActions(
    {
        [startApp]: state => ({ ...state, started: true })        
    },
    defaultState
);

export default appReducer;

