import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Titlecard } from './components/Titlecard';
import Data from './Data'

function App() {
  const cardElements = Data.map(cards => {
    return <Titlecard
      title={cards.title}
      price={cards.price}
      location={cards.location}
      reviewCount= {cards.id.reviewCount}/>
  })
  return (
    <div className="App">

      <Navbar />
      <Hero />


      {cardElements}

      {/* rating={5.0}
         reviewcount={6}
         country="Nigeria"
         title="Life lessons wit Katie Zaferes"
         price={136}  */}

    </div>
  );
}

export default App;
