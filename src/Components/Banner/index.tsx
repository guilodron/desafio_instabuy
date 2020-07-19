import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';

interface IImages {
  mobile: string;
  desktop: string;
}

interface IBanner {
  // eslint-disable-next-line camelcase
  is_mobile: boolean;
  image: string;
}

const Banner: React.FC = () => {
  const [images, setImages] = useState<IImages>();

  useEffect(() => {
    const save: IImages = {} as IImages;

    axios.get('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos')
      .then((response) => response.data)
      .then((data) => data.data.banners)
      // eslint-disable-next-line array-callback-return
      .then((banners) => banners.map((banner: IBanner) => {
        if (banner.is_mobile) {
          save.mobile = `https://ibassets.com.br/ib.store.banner/bnr-${banner.image}`;
        } else {
          save.desktop = `https://ibassets.com.br/ib.store.banner/bnr-${banner.image}`;
        }
      }));
    setImages(save);
  }, []);

  return (
    <Container>
      <picture>
        <source media="(min-width: 600px)" srcSet={images?.desktop} />
        <img src={images?.mobile} alt="banner" />
      </picture>
    </Container>
  );
};

export default Banner;
