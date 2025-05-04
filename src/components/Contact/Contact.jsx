import { FaTrashCan } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <li className={s.listItem}>
      <div className={s.dataWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.btn} onClick={() => handleDelete(id)}>
        <FaTrashCan className={s.icon} />
      </button>
    </li>
  );
};
export default Contact;
