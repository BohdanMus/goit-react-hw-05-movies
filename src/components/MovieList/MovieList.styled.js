import styled from 'styled-components';
export const Img = styled.img`
  width: 200px;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;

  li {
    width: 200px;

    object-fit: cover;
    border-radius: 2%;
    transition: transform 250ms;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
  h3 {
    color: green;
  }
  a {
    text-decoration: none;
  }
`;
