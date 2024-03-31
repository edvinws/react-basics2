import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Protected from './components/Pages/Protected'
import SignIn from './components/Pages/SignIn';
import { createContext } from 'react';
import { useState } from 'react';

function App() {

  const AuthContext = createContext()

  const [auth, setAuth] = useState(false)

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='protected' element={<Protected />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
