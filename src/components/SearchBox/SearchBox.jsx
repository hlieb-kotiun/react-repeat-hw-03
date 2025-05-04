import { IoIosSearch } from "react-icons/io";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilter }) => {
  return (
    <>
      <label className={s.label}>
        <div className={s.wrapper}>
          <input
            className={s.searchBar}
            type="text"
            name="filter"
            value={filter}
            onChange={(e) => handleFilter(e)}
            placeholder="Search"
          />
          <IoIosSearch className={s.icon} size={22} />
        </div>
      </label>
    </>
  );
};
export default SearchBox;
