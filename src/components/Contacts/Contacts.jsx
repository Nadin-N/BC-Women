import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/operation';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};
