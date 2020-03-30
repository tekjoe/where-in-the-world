import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CountryItem from "./CountryItem";
import Select from "./Select";

const CountryList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

CountryList.Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1/-1;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.elementBackground};
  color: ${({ theme }) => theme.color};
  box-shadow: 0 2px 20px 0px rgba(0, 0, 0, 0.15);
  border: none;
  padding: 1.5rem;
  font-size: 1rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    width: 35%;
    margin-bottom: 0;
  }
`;

SearchInput.Label = styled.label`
  display: none;
`;

export default () => {
  const [data, setData] = useState({ countries: [] });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleClick = e => {
    setFilter(e.target.innerText);
  };

  useEffect(() => {
    async function getData() {
      const result = await axios("https://restcountries.eu/rest/v2/all");
      setData({ countries: result.data });
    }
    getData();
  }, []);

  let filteredCountries = data.countries
    .filter(
      countries =>
        countries.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
    .filter(countries => countries.region.indexOf(filter) !== -1);
  return (
    <CountryList>
      <CountryList.Search>
        <SearchInput.Label htmlFor="search">Search</SearchInput.Label>
        <SearchInput
          id="search"
          placeholder="Search for a country..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          type="text"
        />
        <Select handleClick={handleClick} filter={filter} />
      </CountryList.Search>
      {data.countries
        ? filteredCountries.map(country => (
            <CountryItem country={country} key={country.numericCode} />
          ))
        : null}
    </CountryList>
  );
};
