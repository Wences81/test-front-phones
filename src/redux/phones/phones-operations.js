import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonesApi from '../../services/phones-api';

export const fetchPhones = createAsyncThunk(
  'phones/fetchPhones',
  async (_, { rejectWithValue }) => {
    try {
      const phones = await phonesApi.fetchPhones();
      return phones.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
