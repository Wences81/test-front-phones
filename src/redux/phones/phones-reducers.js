import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchPhones } from './phones-operations';
import { changeFilter } from './phones-actions';

const items = createReducer([], {
  [fetchPhones.fulfilled]: (_state, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
