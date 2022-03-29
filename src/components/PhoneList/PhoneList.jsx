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
      {phones.map(({ id, name, imageUrl, description, color, price }) => (
        <Item key={id}>
          <Column>{name}</Column>
          <Column>{imageUrl}</Column>
          <Column>{description}</Column>
          <Column>{color}</Column>
          <Column>{price}</Column>
        </Item>
      ))}
      console.log(imageUrl)
    </List>
  );
}

export default PhoneList;
