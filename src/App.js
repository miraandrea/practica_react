import logo from './logo.svg';
import './App.css';
import { Contador } from './Components/Page/Contador/Contador';
import { Home } from './Components/Page/Home/Home'
import { Contacto } from './Components/Page/Contacto/Contacto';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
function openTab() {
  window.open('https://play.google.com/store/apps/details?id=com.drishya');
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<Contador />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path={openTab} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
