import { createSelector } from 'reselect';

export const getPhones = createSelector(state => state.phones);

// export const getVisiblePhones = createSelector(
//     [getPhones],
//     (phones) => {

//         return phones.filter(({ id }) =>
//             id.toLowerCase().includes(),
//         );
//     },
// );
