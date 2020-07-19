import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 50px;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: green;
  display: flex;
  align-items:center;
  justify-content: center;
  padding: 0 100px;

  span {
    background: transparent;
    font-weight: 24px;
    margin-right: 10px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: transparent;
    color: white;
    transition: 0.2s;

    &:hover {
      color: black;
      svg {
        fill: black;
      }
    }

    svg {
      background: transparent;
      transition: 0.2s;

    }
  }
`;
