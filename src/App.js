// src/App.js
import React, { useState } from 'react'; // 1. Import useState
import GlobalStyle from './styles/GlobalStyle';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Modal from './components/common/Modal'; // 2. Import the new Modal component

function App() {
  // 3. Add state to manage the selected image for the modal
  const [selectedImage, setSelectedImage] = useState(null);

  // 4. Create functions to open and close the modal
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      {/* 5. Pass the openModal function down */}
      <Projects onImageClick={openModal} />

      {/* 6. Conditionally render the Modal if an image is selected */}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </>
  );
}

export default App;