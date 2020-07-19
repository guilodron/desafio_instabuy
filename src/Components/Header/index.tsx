import React from 'react';
import { Container } from './styles';
import iconDesktop from '../../assets/logo-desktop.png';

const Header:React.FC = () => (
  <Container>
    <a href="/">
      <img src={iconDesktop} alt="logo" />
    </a>
  </Container>
);

export default Header;
