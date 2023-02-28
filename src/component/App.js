import '../App.css';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import {Overview} from './Overview'
import {Main} from './Main';
import Dashboard from './Dashboard'
import BubblesGraph from './BubblesGraph'
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom' 

function App() {
  return (
    
    <div className="App">
      
<Router>
      <Navbar/>
      <Routes>
      <Route excat path="/" element={<Main/>} />  
      <Route excat path="/Overview" element={<Overview/>} />  
      <Route excat path="/Dashboard" element={<Dashboard/>} /> 
      <Route excat path="/BubblesGraph" element={<BubblesGraph/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
