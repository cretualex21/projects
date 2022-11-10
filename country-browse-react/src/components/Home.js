import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const urlFilter = "https://restcountries.com/v3.1/region/";

const Home = ({ darkMode }) => {
  const { countries, filterCountry, setCountries, setFilterCountry, loading } =
    useGlobalContext();

  const countriesList = countries.map((item) => {
    const {
      name: { common },
      name: { official },
      flags: { png },
      population,
      region,
    } = item;
    return {
      country: common,
      name: official,
      flag: png,
      capital: item.capital,
      population: population,
      region: region,
    };
  });
  async function filterFetchCountry() {
    const response = await fetch(`${urlFilter}${filterCountry}`);
    const data = await response.json();
    setCountries(data);
  }
  React.useEffect(() => {
    if (filterCountry) {
      filterFetchCountry();
    }
  }, [filterCountry]);

  return (
    <>
      <div
        className={`${
          darkMode ? "search-form-container darkmode" : "search-form-container"
        }`}
      >
        <SearchForm darkMode={darkMode} />
      </div>
      <div className="filter-from-container">
        <FilterForm darkMode={darkMode} />
      </div>

      <div className="countries">
        {countriesList.map((item, index) => {
          const numberPopulationDisplay = new Intl.NumberFormat().format(
            item.population
          );
          return (
            <section key={index} className="country-container ">
              <div className="country__flag">
                <Link to={`/country/${item.name}`}>
                  <img src={item.flag}></img>
                </Link>
              </div>
              <div className="country__information ">
                <div className="country__information__container  ">
                  <p className="country__information__container__name">
                    {item.country}
                  </p>
                  <p>
                    <span className="bold">Population: </span>
                    {numberPopulationDisplay}
                  </p>
                  <p>
                    <span className="bold">Region: </span>
                    {item.region}
                  </p>
                  <p>
                    <span className="bold">Capital: </span>
                    {item.capital}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Home;
