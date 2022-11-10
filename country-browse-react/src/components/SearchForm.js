import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = ({ darkMode }) => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCountry}
            className={`${darkMode ? "darkmode" : ""}`}
            placeholder="Search for a country..."
          ></input>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
