import { useState } from 'react';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import GalleryImages from './components/ImagesGallery';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import Sidebar from './components/Sidebar';
import TestimonialsSection from './components/TestimonialsSection';
import './global-styles.scss';

function App() {
  const [burger, setBurger] = useState(false);

  const toggleBurgerValue = () => setBurger((prevState) => !prevState);

  window.addEventListener('resize', (e) => {
    const target = e.target as Window;

    if (target.innerWidth >= 768) {
      setBurger(false);
    }
  });

  return (
    <>
      <Navbar isOpenBurger={burger} toggleBurgerValue={toggleBurgerValue} />
      {burger && <Sidebar />}
      <SectionHero />
      <FirstSection />
      <TestimonialsSection />
      <GalleryImages />
      <Footer />
    </>
  );
}

export default App;
