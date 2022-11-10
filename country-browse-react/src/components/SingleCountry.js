import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleCountry = ({ darkMode }) => {
  const { loading } = useGlobalContext();
  const { name } = useParams();
  const [singleCountry, setSingleCountry] = useState([]);
  const fetchSingleCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${name}?fields=name,capital,currencies,topLevelDomain,subregion,region,nativeName,flags,population,languages,borders`
    );
    const data = await response.json();

    setSingleCountry(data);
  };
  useEffect(() => {
    fetchSingleCountry();
  }, []);
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div className="country-container">
      <div className="back-btn">
        <Link to="/" className={`${darkMode ? "darkmode" : ""}`}>
          <i class="fa-solid fa-arrow-left"></i>
          Back
        </Link>
      </div>

      {singleCountry.map((item, index) => {
        const numberPopulationDisplay = new Intl.NumberFormat().format(
          item.population
        );
        return (
          <article className="country-desc" key={index}>
            <img src={item.flags.png}></img>
            <div className="country-desc-wrapper">
              <div className="country-desc__info-container">
                <p className="country-desc__info-container__name">
                  {item.name}
                </p>
              </div>
              <div className="country-desc-flex">
                <div className="country-desc__info-container">
                  <p>
                    <span className="country-desc__info-container__bold">
                      Native Name:{" "}
                    </span>
                    {item.nativeName}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Population:{" "}
                    </span>
                    {numberPopulationDisplay}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Region:{" "}
                    </span>
                    {item.region}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Sub Region:{" "}
                    </span>
                    {item.subregion}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Capital:{" "}
                    </span>
                    {item.capital}
                  </p>
                </div>
                <div className="country-desc__info-container">
                  <p>
                    <span className="country-desc__info-container__bold">
                      Top Level Domain:{" "}
                    </span>
                    {item.topLevelDomain}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Currencies:{" "}
                    </span>
                    {item.currencies[0].name}
                  </p>
                  <p>
                    <span className="country-desc__info-container__bold">
                      Languages:{" "}
                    </span>
                    {`${item.languages.map((item) => {
                      return item.name;
                    })} `}
                  </p>
                </div>
              </div>

              <div className="country-desc__info-container">
                <span className="country-desc__info-container__bold">
                  Border Countries:{" "}
                </span>
                <div className="country-desc__info-container__border">
                  {item.borders
                    ? item.borders.map((item) => {
                        return <p>{item}</p>;
                      })
                    : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default SingleCountry;
