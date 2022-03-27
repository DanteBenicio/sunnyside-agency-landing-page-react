import './App.css';

function App() {
  const [burger, setBurger] = useState(false);

  const toggleBurgerValue = () => setBurger((prevState) => !prevState);

  window.addEventListener('resize', (e) => {
    if (e.target?.innerWidth >= 768) {
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
