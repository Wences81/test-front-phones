import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchPhones } from './phones-operations';

const items = createReducer([], {
  [fetchPhones.fulfilled]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
});
