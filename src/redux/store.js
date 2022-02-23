import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../redux/phones/phones-reducers';

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
