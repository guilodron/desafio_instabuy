import React from 'react';
import { Container } from './styles';
import iconDesktop from '../../assets/logo-desktop.png';

const Header:React.FC = () => (
  <Container>
    <img src={iconDesktop} alt="logo" />
  </Container>
);

export default Header;
