import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonesOperations, phonesSelectors } from '../../redux/phones/index';
import { List, Item } from './PhoneList.styled';

function PhoneList() {
  const dispatch = useDispatch();

  const phones = useSelector(phonesSelectors);
  useEffect(() => dispatch(phonesOperations.fetchPhones()), [dispatch]);

  return (
    <List>
      {phones.map(({ id }) => (
        <Item key={id}></Item>
      ))}
    </List>
  );
}

export default PhoneList;
