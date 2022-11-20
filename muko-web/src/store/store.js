import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { createRootReducer } from './slices';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

store.lazyReducers = {};

export const withReducer = (key, lazyReducer) => (Component) => {
  store.lazyReducers[key] = lazyReducer;
  store.replaceReducer(createRootReducer(store.lazyReducers));

  return (props) => <Component {...props} />;
};

export default store;
