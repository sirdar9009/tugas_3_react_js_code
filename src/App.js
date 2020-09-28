import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuMakanan from './Page/MenuMakanan';
import Footer from './Page/Footer';



function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak />
      <Footer/>
    </div>
  );
}

export default App;
