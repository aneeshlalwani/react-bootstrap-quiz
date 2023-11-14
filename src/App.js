import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Auction from './components/Auction';
import Discover from './components/Discover';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <Auction />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
