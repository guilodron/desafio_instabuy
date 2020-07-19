import React from 'react';
import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <a
      aria-label="github"
      href="https://github.com/guilodron"
    >
      <span>
        Guilherme
        <br />
        Rodrigues
      </span>
      <i className="fa fa-github" style={{ fontSize: 50, backgroundColor: 'transparent' }} />
    </a>
  </Container>
);

export default Footer;
