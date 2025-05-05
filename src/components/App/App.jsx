import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const KEY_LOCALSTORAGE = "contacts";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (newContact) => {
    console.log(newContact);

    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFilter = (e) => {
    console.log(e.target.value);

    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.toString().includes(filter.toString())
  );

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />

      {contacts.length > 0 ? (
        <SearchBox filter={filter} handleFilter={handleFilter} />
      ) : (
        <p>There is no contacts yet!</p>
      )}
      {filteredContacts.length === 0 && <p>There is no matches!</p>}
      <ContactList handleDelete={handleDelete} contacts={filteredContacts} />
    </div>
  );
}

export default App;
