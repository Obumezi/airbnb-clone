import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Titlecard } from './components/Titlecard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Titlecard
        img="katie.png"
        rating={5.0}
        reviewcount={6}
        country="Nigeria"
        title="Life lessons wit Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
