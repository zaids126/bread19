import './App.css';
import Navigation from './Components/Navigation';
import Start from './Components/Start';
import Card from './Components/Card';
import CarouselP from './Components/CarouselP';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Navigation/>
     <Start/>
     <Card/>
     <CarouselP/>
     <Footer/>
    </div>
  );
}

export default App;
