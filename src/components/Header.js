import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  background: #2b3743;
  padding: 2rem 1rem;

  box-shadow: 0 -10px 15px 2px rgba(0, 0, 0, 0.5);
`;

Header.Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

Header.Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Helvetica Neue";
`;

Header.ThemeToggler = styled.a`
  text-decoration: none;
`;

export default () => {
  return (
    <Header>
      <Container>
        <Header.Body>
          <Header.Title>Where in the world?</Header.Title>
          <Header.ThemeToggler>Dark Mode</Header.ThemeToggler>
        </Header.Body>
      </Container>
    </Header>
  );
};
