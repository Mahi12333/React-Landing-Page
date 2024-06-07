import './App.css'
import Features from './pages/Features';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Tesimonial from './pages/Tesimonial';
import Footer from './pages/Footer';


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Features/>
    <Tesimonial/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
