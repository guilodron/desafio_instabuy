import styled from 'styled-components';

interface IImages {
  mobile: string;
  desktop: string;
}

interface ContainerProps {
  images: IImages | undefined;
}

export const Container = styled.div<ContainerProps>`
  max-width: 1350px;
  margin-bottom: 20px;


  img {
    /* max-width: 100%; */

    height: auto;
    width: 100%;
  }

`;
