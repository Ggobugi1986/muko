import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

const portalReducer = combineReducers({
  ui: uiReducer,
});

export default portalReducer;
