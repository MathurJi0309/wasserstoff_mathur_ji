import '../App.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import WorldMap from './WorldMap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <WorldMap/>
    </div>
  );
}

export default App;
