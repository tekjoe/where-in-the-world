import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  background: ${({ theme }) => theme.elementBackground};
  padding: 2rem 1rem;
  box-shadow: 0 -10px 15px 2px rgba(0, 0, 0, 0.5);
`;

Header.Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

Header.Title = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`;

Header.ThemeToggler = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 1rem;
  }
`;

export default ({ toggleTheme, theme }) => {
  return (
    <Header>
      <Container>
        <Header.Body>
          <Header.Title to="/">Where in the world?</Header.Title>
          <Header.ThemeToggler onClick={toggleTheme}>
            <span>
              <img src={theme === "dark" ? moon : sun} alt={theme} />
            </span>
            {`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
          </Header.ThemeToggler>
        </Header.Body>
      </Container>
    </Header>
  );
};
