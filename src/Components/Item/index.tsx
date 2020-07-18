/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

type ItemProps = {
  src: string;
  name: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, price, src }) => (
  <Container>
    <img src={src} alt={name} />
    <strong>{name}</strong>
    <span>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)}</span>
  </Container>
);

export default Item;
