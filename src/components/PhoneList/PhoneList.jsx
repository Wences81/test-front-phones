import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonesOperations, phonesSelectors } from '../../redux/phones/index';
import { List, Item, Column } from './PhoneList.styled';

function PhoneList() {
  const dispatch = useDispatch();

  const phones = useSelector(phonesSelectors.getVisibleContacts);
  useEffect(() => dispatch(phonesOperations.fetchPhones()), [dispatch]);

  return (
    <List>
      {phones.map(({ _id, name, email, phone, favorite }) => (
        <Item key={_id}>
          <Column>{name}</Column>
          <Column>{email}</Column>
          <Column>{phone}</Column>
        </Item>
      ))}
      console.log(phones)
    </List>
  );
}

export default PhoneList;
