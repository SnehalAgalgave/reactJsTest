import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import SignupForm from './components/SignupForm'; 
const App = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignupForm />} /> 
        </Routes>
    </Router>
    );
};
export default App;
