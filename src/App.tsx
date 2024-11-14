import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { AuthForm } from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm type="login" />} />
          <Route path="/signup" element={<AuthForm type="signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;