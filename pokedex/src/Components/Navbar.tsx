import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #242424;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #646cff;
  text-decoration: none;
  
  &:hover {
    color: #535bf2;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #646cff;
  }
  
  &.active {
    color: #646cff;
  }
`;


const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">PokéApp</Logo>
        <NavLinks>
          <NavLink to="/pokedex">Pokédex</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
