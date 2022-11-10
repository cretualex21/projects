import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const urlAll = "https://restcountries.com/v3.1/all";
const urlSearch = "https://restcountries.com/v3.1/name/";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const fetchCountry = useCallback(async () => {
    setLoading(true);
    let data;
    try {
      if (!searchTerm) {
        const response = await fetch(`${urlAll}`);
        data = await response.json();
      } else if (searchTerm) {
        const response = await fetch(`${urlSearch}${searchTerm}`);
        data = await response.json();
      }

      if (data) {
        setCountries(data);
      } else {
        setCountries([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchCountry();
  }, [searchTerm, fetchCountry]);

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        setSearchTerm,
        setFilterCountry,
        filterCountry,
        setCountries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
