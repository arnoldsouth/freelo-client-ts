import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import HomePageLol from './lol/pages/HomePageLol';
import LeaderboardPageLol from './lol/pages/LeaderboardPageLol';
import AboutPage from './pages/AboutPage';
import HomePageVal from './val/pages/HomePageVal';
import NavbarLol from './lol/components/Navbar/NavbarLol';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lol" element={<HomePageLol />} />
        <Route path="/lol/leaderboard" element={<LeaderboardPageLol />} />
        <Route path="/val" element={<HomePageVal />} />
      </Routes>
    </Router>
  );
};

export default App;
