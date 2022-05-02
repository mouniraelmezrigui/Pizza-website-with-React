import './App.css';
import Home from './components/Home/Home';
import Pizza from './components/Pizza/Pizza';
import SectionFavirate from './components/favorite/Sectionfavorite';
import Sweet from './components/Sweet';
import Footer from './components/Footer';
import './mediaQuery.css'
function App() {
  return (
    <div className="App">
      <Home />
      <SectionFavirate />
      <Pizza />
      <Sweet />
      <Footer />
    </div>
  );
}

export default App;
