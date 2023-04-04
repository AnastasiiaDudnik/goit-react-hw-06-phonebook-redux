import { nanoid } from 'nanoid';

export const addContact = newContact => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      newContact,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: contactId,
  };
};

export const setContactFilter = value => {
  return {
    type: 'filters/setContactFilter',
    payload: value,
  };
};
