import './App.css';

// imports react-router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components impor
import NavBar from './components/NavBar';

// pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <h1>Learning react router</h1>
      <BrowserRouter>
      {/* links com react router */}
        <NavBar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          {/* 6 - nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to='/about'/>} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
