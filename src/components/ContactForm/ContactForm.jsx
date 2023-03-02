import { useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormInput,
  AddButton,
  TitleH2,
  AddSection,
} from './ContactsForm.styled';
import { addContact } from 'redux/contacts/operation';

export function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.target;
    const contact = { name: name.value, number: number.value };
    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <AddSection>
      <TitleH2>Add contact</TitleH2>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </AddSection>
  );
}
