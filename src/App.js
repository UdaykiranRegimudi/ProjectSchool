import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from "./Components/About";

import './App.css';

function App() {
  return (
    <>
    <Home/>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route excert path="/" element={<Main/>}/>
          <Route excert path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
