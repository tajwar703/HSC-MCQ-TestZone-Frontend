import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeroSection from './Pages/Hero/Hero';
import Subjects from './Pages/Subjects/Subjects';
import Years from './Pages/Years/Years';
import Boards from './Pages/Boards/Boards';
import MCQ from './Pages/MCQ/MCQ';
import Result from './Pages/Result/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/years" element={<Years />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/mcq" element={<MCQ />} />
        <Route path="/result" element={<Result />} /> {/* এখানে '/results' থেকে '/result' করা হয়েছে */}
      </Routes>
    </Router>
  );
};

export default App;