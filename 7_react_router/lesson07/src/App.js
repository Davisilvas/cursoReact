import './App.css';

// imports react-router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages import
import Home from "./pages/Home";
import About from "./pages/About";

// components impor
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Learning react router</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
