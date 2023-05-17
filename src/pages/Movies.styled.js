import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 2px solid #239b56;
  border-radius: 16px;
  padding: 8px;
  font-size: 16px;
  width: 300px;
  outline: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 8px 8px;
  border: none;
  border-radius: 16px;
  color: white;
  font-size: inherit;
  background-color: #239b56;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  &:hover,
  &:focus {
    background: green;
  }
`;
