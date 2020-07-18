import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Item from '../../Components/Item';
import {
  Container, Collection, Itens, Select, Filters, Input,
} from './styles';

interface Price {
  price: number;
}

interface IProduct {
  name: string;
  id: string;
  images: string[];
  prices: Price[];
}

interface ICollection {
  id: string;
  title: string;
  items: IProduct[];

}

interface IFilteredProduct {
  name: string;
  id: string;
  image: string;
  price: number;
  section: string;
}

const Products: React.FC = () => {
  const sizes = {
    s: 'small/s',
    m: 'medium/m',
    l: 'large/l',
  };

  const [produtos, setProdutos] = useState([] as IFilteredProduct[]);
  const [filter, setFilter] = useState('none');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos')
      .then((response) => response.data)
      .then((data) => data.data.collection_items)
      .then((collections) => {
        const products = collections.map((collection: ICollection) => {
          const secao = collection.title;
          return collection.items.map((item) => ({
            name: item.name,
            id: item.id,
            image: item.images[0],
            price: item.prices[0].price,
            section: secao,
          }));
        });
        let allProducts: IFilteredProduct[] = [];
        products.forEach((item: IFilteredProduct[]) => { allProducts = [...allProducts, ...item]; });
        setProdutos(allProducts);
      });
  }, []);

  const handleImage = useCallback((src: string, size: 'm' | 'l' | 's') => {
    const image = `https://assets.instabuy.com.br/ib.item.image.${sizes[size]}-${src}`;
    return image;
  }, [sizes]);

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleSort = useCallback((event) => {
    if (event.target.value !== 'none') {
      const newOrder = produtos;
      if (event.target.value === 'asc') {
        newOrder.sort((a, b) => b.price - a.price);
      } else {
        newOrder.sort((a, b) => a.price - b.price);
      }
      setProdutos([...newOrder]);
    }
  }, [produtos]);

  return (
    <Container>
      <h1 style={{ color: 'rgb(0, 128, 0, 0.8)', borderBottom: '3px solid green' }}>Orgânicos</h1>
      <Filters>
        <span>Filtros:</span>
        <Select id="select" onChange={handleFilterChange}>
          <option value="none">Categoria</option>
          <option value="Mercearia">Mercearia</option>
          <option value="Nossa Horta">Nossa Horta</option>
        </Select>
        <Select onChange={handleSort}>
          <option value="none">Ordenar</option>
          <option value="asc">Maior preço</option>
          <option value="desc">Menor preço</option>
        </Select>
        <Input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={handleSearch}
        />
      </Filters>
      <Collection>
        <Itens>
          {produtos && produtos
            .filter((produto) => {
              if (filter === 'none' && !search) { return true; }
              if (search && filter === 'none') {
                const haystack = produto.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                const needle = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return (haystack.indexOf(needle) !== -1);
              }

              const haystack = produto.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
              const needle = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              return (produto.section === filter && haystack.indexOf(needle) !== -1);
            })
            .map((produto) => (
              <Item
                key={produto.id}
                src={handleImage(produto.image, 'l')}
                name={produto.name}
                price={produto.price}
              />
            ))}
        </Itens>
      </Collection>
    </Container>
  );
};

export default Products;
