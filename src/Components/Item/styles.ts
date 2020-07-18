import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 280px;
  border: 1px solid rgb(0, 128, 0, 0.3);
  margin: 5px 5px;
  transition: 0.3s;
  border-radius: 5px;
  padding: 10px;
  background-color: white;

  &:hover {
    border: 2px solid green;
  }

  img {
    max-width: 150;
    max-height: 150px;
    margin-bottom: 10px;
  }

  strong {
    text-align: center;
    flex: 1;
    background-color: white;

  }

  span {
    font-size: 24px;
    font-weight: 700;
    color: green;
    margin-bottom: 10px;
    background-color: white;

  }
`;
