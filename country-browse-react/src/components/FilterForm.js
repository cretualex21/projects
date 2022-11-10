import React, { useState } from "react";
import { useGlobalContext } from "../context";

const FilterForm = ({ darkMode }) => {
  const { setFilterCountry } = useGlobalContext();
  const searchValue = React.useRef("");
  const [selected, setSelected] = useState("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const filterCountry = (event) => {
    setFilterCountry(searchValue.current.value);
    setSelected(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <select
            value={selected}
            ref={searchValue}
            onChange={filterCountry}
            className={`${darkMode ? "darkmode" : ""}`}
          >
            <option disabled={true} value="">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default FilterForm;
