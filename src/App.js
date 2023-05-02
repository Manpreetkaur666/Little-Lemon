import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Booking from './components/Booking';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/booking" element={<Booking/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
