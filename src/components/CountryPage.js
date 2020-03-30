import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const CountryPage = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 5rem;
  }
`;

const CountryImage = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  @media (min-width: 768px) {
    grid-column: span 6;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  h1,
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    grid-column: span 6;
  }
`;

CountryInfo.Col = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    flex-basis: 50%;
    &:nth-of-type(2) {
      padding-top: 4rem;
    }
    &:last-of-type {
      flex-basis: 100%;
    }
  }
`;

CountryInfo.Neighbor = styled(Link)`
  background: ${({ theme }) => theme.elementBackground};
  padding: 0.5rem 2rem;
  display: inline-block;
  margin: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
`;

const BackButton = styled(Link)`
  background: ${({ theme }) => theme.elementBackground};
  padding: 0.5rem 2rem;
  display: block;
  width: max-content;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  grid-column: 1/-1;
  margin-bottom: 3rem;
  &:before {
    content: "⬅";
    margin-right: 1rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export default props => {
  const [data, setData] = useState({ country: [] });
  useEffect(() => {
    async function getData() {
      const result = await axios(
        `https://restcountries.eu/rest/v2/alpha/${props.match.params.alpha3Code.toLowerCase()}`
      );
      setData({ country: result.data });
    }
    getData();
  });
  const {
    name,
    population,
    capital,
    subregion,
    region,
    nativeName,
    flag,
    borders,
    languages,
    currencies,
    topLevelDomain
  } = data.country;
  return (
    <Container>
      <CountryPage>
        <BackButton to="/">Back</BackButton>
        <CountryImage src={flag} alt={name} />
        <CountryInfo>
          <CountryInfo.Col>
            <h1>{name}</h1>
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </CountryInfo.Col>
          <CountryInfo.Col>
            <p>
              <strong>Top Level Domain:</strong>{" "}
              {data.country.topLevelDomain
                ? topLevelDomain.map(tld => <span key={tld}>{`${tld} `}</span>)
                : null}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {data.country.currencies
                ? currencies.map(currency => (
                    <span key={currency}>{`${currency.name} `}</span>
                  ))
                : null}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {data.country.languages
                ? languages.map(language => (
                    <span key={language.name}>{`${language.name} `}</span>
                  ))
                : null}
            </p>
          </CountryInfo.Col>
          <CountryInfo.Col>
            <h2>Border Countries:</h2>
            {data.country.borders
              ? borders.map(neighbor => (
                  <CountryInfo.Neighbor to={`/country/${neighbor}`}>
                    {neighbor}
                  </CountryInfo.Neighbor>
                ))
              : null}
          </CountryInfo.Col>
        </CountryInfo>
      </CountryPage>
    </Container>
  );
};
