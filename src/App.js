import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Products from './components/Products';
import Blog from './components/Blog';
import Contact from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>   
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<AboutUs/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/gallery' element={<Gallery/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    
    
    <><Footer/></>
    
    </div>
  );
}

export default App;
