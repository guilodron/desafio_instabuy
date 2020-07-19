import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
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
      <AiOutlineGithub fill="white" size={45} />
    </a>
  </Container>
);

export default Footer;
