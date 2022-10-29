import './App.css';

// imports react-router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components impor
import NavBar from './components/NavBar';

// pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Learning react router</h1>
      <BrowserRouter>
      {/* links com react router */}
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          {/* 6 - nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
