import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import './index.css'; // or './styles.css'


// Pages
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import LetterRequestForm from "./Components/LetterRequestForm";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      {/* Define routes here */}
        
      <Route path="/" element={<Home />} />
        
      {/* Login route */}
      <Route path="/login" element={<LoginPage />} />

      <Route path="/letter" element={<LetterRequestForm />} />
        
      {/* Signup route */}
      <Route path="/signup" element={<SignupPage />} />
        
      
    </Routes>
  );
}

export default App;
