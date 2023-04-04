import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </List>
  );
};
