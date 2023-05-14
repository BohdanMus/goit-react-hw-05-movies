import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 300px;
  height: auto;
`;

export const LinkBack = styled(StyledLink)`
  button {
    cursor: pointer;
    margin: 8px;
    padding: 8px 8px;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: inherit;
    background-color: green;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: #239b56;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
`;
