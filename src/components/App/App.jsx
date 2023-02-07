
import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

export function App() {

   const [filter, changeFilter] = useFilter();
   const [contacts, onAddContact, onDeleteContact] = useContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form onData={onAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />    
    </div>
  );
}
