import './App.css';
import {Navbar} from './components'
import {Home} from './pages'
import {Cart} from './pages'
import {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
   <div>
  <BrowserRouter>
    <Navbar/>
  <Routes> 
   <Route path="/" element={<Home />} />
   <Route path="/cart" element={<Cart />} />
  </Routes>
  </BrowserRouter>

   </div>
  );
}

export default App;
