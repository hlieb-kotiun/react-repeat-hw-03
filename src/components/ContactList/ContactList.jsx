import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((item) => {
        return <Contact key={item.id} {...item} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};
export default ContactList;
