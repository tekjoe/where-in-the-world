import React from "react";
import styled from "styled-components";
import CountryList from "./CountryList";

const HomePage = styled.section`
  margin: 4rem 2rem;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default () => {
  return (
    <HomePage>
      <Container>
        <CountryList />
      </Container>
    </HomePage>
  );
};
