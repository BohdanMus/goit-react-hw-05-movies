import styled from 'styled-components';

export const Img = styled.img`
  width: 150px;
  height: auto;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  column-gap: 16px;
  & h3 {
    font-size: 16px;
  }
  & p {
    font-size: 12px;
  }
`;

export const ListItem = styled.li`
  width: 150px;
`;

export const NoCast = styled.p`
  margin-left: 40px;
`;
