import styled from '@emotion/styled';

export const CastTitle = styled.h2`
  color: pink;
  margin-bottom: 20px;
  text-align: center;
`;

export const CastGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
`;

export const CastElement = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  align-items: center;
  color: #ffb6c1;
  background-color: white;
  & p {
    padding: 0 5px;
    line-height: 1.3;
    text-align: center;
  }
  & p:last-child {
    margin-top: auto;
  }
`;

export const CastPhoto = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 3 / 4;
`;
