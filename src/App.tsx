import React from 'react';
import GlobalStyle from './styles/global';
import Products from './Pages/Products';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
