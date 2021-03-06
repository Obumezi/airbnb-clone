import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Titlecard } from './components/Titlecard';
import Data from './Data'

function App() {
  const cardElements = Data.map(cards => {
    return <Titlecard
      key={cards.id} //this is required when mapping over data a key is always required
      cards={cards}



     /*  coverImg={cards.coverImg}
      title={cards.title}
      price={cards.price}
      location={cards.location}
      rating={cards.stats.rating}
      reviewcount={cards.stats.reviewCount}
      openSpots={cards.openSpots} */ />
  })
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="titlecard">
        {cardElements}
      </div>

      {/* rating={5.0}
         reviewcount={6}
         country="Nigeria"
         title="Life lessons wit Katie Zaferes"
         price={136}  */}

    </div>
  );
}

export default App;
