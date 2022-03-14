import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Titlecard } from './components/Titlecard';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
   <Titlecard/>
    </div>
  );
}

export default App;
