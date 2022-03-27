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
    <h1>Hello World</h1>
  );
}

export default App;
