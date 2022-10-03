import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './appSlice';

const rootReducer = combineReducers({
  app: appReducer,
});

export const createRootReducer = (lazyReducers) => {
  const rootReducer = combineReducers({
    app: appReducer,
    ...lazyReducers,
  });

  return rootReducer;
};

export default rootReducer;
