import Navbar from './components/Navbar';
import Card from './components/Card';
import './components/styles.css';
import data from './components/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card cardObject={item}/>
    )
  });
  return (
    <>
      <Navbar />
      <section className='card--section'>
        {cards}
      </section>
    </>
  );
}

export default App;
