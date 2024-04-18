import './App.css';
import Footer from './Component/Footer';
import HomePage from './Component/HomePage';
import Navbar from './Component/Navbar';
import SpecialFood from './Component/SpecialFood';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
    <SpecialFood/>
    <Footer/>
      
    </div>
  );
}

export default App;
