import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  justify-content: center;

  margin: 40px;
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 300px;
  height: auto;
`;

export const LinkButton = styled(StyledLink)`
  button {
    cursor: pointer;
    margin: 20px;
    padding: 8px 8px;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: inherit;
    background-color: green;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    width: 100px;
    :hover {
      background: #239b56;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0px;
  & h3 {
    display: flex;
    align-items: center;
  }
`;
