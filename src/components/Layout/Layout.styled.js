import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  text-decoration: none;
  width: 600px;
  margin: 8px;
  padding: 8px 8px;
  border: none;
  border-radius: 16px;
  color: white;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &.active {
    border: 2px solid white;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 40px;
  padding: 0px 40px;
  font-size: 24px;
`;

export const Header = styled.header`
  background-color: #239b56;
`;
