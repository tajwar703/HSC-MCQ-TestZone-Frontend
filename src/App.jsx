// src/App.jsx
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Subjects from './Pages/Subjects/Subjects';
import MCQ from './Pages/MCQ/MCQ';
import Result from './Pages/Result/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Subjects />} />
        <Route path="/mcq" element={<MCQ />} />
        <Route path="/results" element={<Result />} /> {/* এখানে পরিবর্তন করা হয়েছে */}
      </Routes>
    </Router>
  );
};

export default App;
