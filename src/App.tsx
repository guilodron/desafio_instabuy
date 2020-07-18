import React from 'react';
import GlobalStyle from './styles/global';
import Products from './Pages/Products';
import Header from './Components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Products />
    </>
  );
}

export default App;
