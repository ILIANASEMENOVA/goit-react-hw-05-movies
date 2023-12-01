import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 10px;
  padding-right: 50px;
  background-color: transparent;
  outline: none;
  color: black;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom: 1px solid FFC0CB;
`;

export const BtnSearch = styled.button`
  margin-top: 20px;
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: #ff69b4;
    border: 3px solid #ff69b4;
  }
`;
export const MoviesText = styled.h2`
  color: pink;
  margin-bottom: 20px;
  text-align: center;
`;
