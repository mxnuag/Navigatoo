import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './Components/services/Services';
import Location from './Components/Locations/Location';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import Timetable from './pages/timetable/Timetable';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/team" element={<Team />} />
          <Route path="/timetable" element={<Timetable /> } />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
