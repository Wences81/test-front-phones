import { createSelector } from 'reselect';

export const getPhones = state => state.phones.items;
export const getFilter = state => state.phones.filter;

export const getVisibleContacts = createSelector(
  [getPhones, getFilter],
  (allPhones, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allPhones.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
