import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import HomePage from './Pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import NotFoundPage from './Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
