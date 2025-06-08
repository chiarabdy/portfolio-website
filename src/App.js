// src/App.js
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Hero from './components/Hero/Hero';
import About from './components/About/About'; // 1. Import the new component

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About /> {/* 2. Add the About component here */}
      {/* We will add Projects and Contact sections here later */}
    </>
  );
}

export default App;