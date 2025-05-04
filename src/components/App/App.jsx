import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermine Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

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

  console.log(filteredContacts);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />

      {contacts.length > 0 ? (
        <SearchBox filter={filter} handleFilter={handleFilter} />
      ) : (
        <p>There is no contacts yet!</p>
      )}
      <ContactList handleDelete={handleDelete} contacts={filteredContacts} />
    </div>
  );
}

export default App;
