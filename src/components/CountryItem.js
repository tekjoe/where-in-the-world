import React from "react";
import styled from "styled-components";

const CountryItem = styled.article`
  border-radius: 0.5rem;
  background: #2b3743;
  box-shadow: 0 2px 20px 0px rgba(0, 0, 0, 0.15);
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
  const { name, population, region, flag, capital } = country;
  return (
    <CountryItem>
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
