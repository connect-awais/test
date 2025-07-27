import './App.css'
import {Routes, Route, useLocation } from 'react-router-dom';

import BMWStripe from './components/BMWStripe/BMWStripe';
import Navbar from './components/Header/Navbar';

import Home from './pages/HOMEPAGE/Home/Home'
import ChatBot from './pages/CHATBOT/ChatBot';

import Footer from './components/Footer/Footer'


function App() {

   const location = useLocation();
  const hideLayout = location.pathname === '/ai.chatbot'; // 👈 condition

  return (
    <>
     {!hideLayout && <BMWStripe />}
      {!hideLayout && <Navbar />}

    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/ai.chatbot' element={<ChatBot/>}></Route>
    </Routes>


    {!hideLayout && <Footer />}
    </>
  )
}

export default App
