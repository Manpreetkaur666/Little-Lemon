import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/booking" element={<BookingPage/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
