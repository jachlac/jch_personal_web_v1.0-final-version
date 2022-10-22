import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import './App.css';


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import AprendePage from './pages/AprendePage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "News" element={<NovedadesPage/>} />
        <Route path= "Learn" element={<AprendePage/>} />
        <Route path= "Contact" element={<ContactoPage/>} />
        

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
