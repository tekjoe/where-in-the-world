import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryItem = styled(Link)`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: inherit;
`;

CountryItem.Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
`;

CountryItem.Body = styled.div`
  padding: 2rem;
  h4 {
    font-weight: bold;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

export default ({ country }) => {
  const { name, population, region, flag, capital, alpha3Code } = country;
  return (
    <CountryItem to={`country/${alpha3Code}/`}>
      <CountryItem.Image src={flag} />
      <CountryItem.Body>
        <h4>{name}</h4>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </CountryItem.Body>
    </CountryItem>
  );
};
