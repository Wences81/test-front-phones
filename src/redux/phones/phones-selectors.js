export const getPhones = state => state.phones.items;
export const getFilter = state => state.phones.filter;

export const getVisibleContacts = state => {
  const allPhones = getPhones(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allPhones.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
