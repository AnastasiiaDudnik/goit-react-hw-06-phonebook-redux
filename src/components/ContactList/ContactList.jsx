import { useSelector } from 'react-redux';
import { List, ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </List>
  );
};
