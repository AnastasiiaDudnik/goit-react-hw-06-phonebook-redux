import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContainer } from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');

  const onFilterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onFilterChange} />
      <ContactList />
    </FormContainer>
  );
}
