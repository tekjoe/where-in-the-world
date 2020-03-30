import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    margin-right: 0.5rem;
  }
`;

const AdjustIcon = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 0.5rem;
  path {
    fill: ${({ theme }) => theme.color};
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
              <AdjustIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 2v16a8 8 0 1 0 0-16zm0 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
              </AdjustIcon>
            </span>
            {`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
          </Header.ThemeToggler>
        </Header.Body>
      </Container>
    </Header>
  );
};
