import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
