import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LolHomePage from '../pages/lolpages/LolHomePage';
import ValHomePage from '../pages/valpages/ValHomePage';
import LolLeaderboardPage from '../pages/lolpages/LolLeaderboardPage';
// import LolNavbar from '../components/LolNavbar/LolNavbar';
import { Link, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy';
import LolNavbar from '../components/LolNavbar/LolNavbar';

const RouterConfig = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* LOL Routes */}
        <Route
          path="/lol/*"
          element={
            <div>
              <LolNavbar />

              <Routes>
                <Route path="/" element={<LolHomePage />} />
                <Route path="/leaderboard" element={<LolLeaderboardPage />} />
              </Routes>
            </div>
          }
        />
        {/* <Route path="/lol" element={<LolHomePage />} /> */}
        {/* <Route path="/lol/leaderboard" element={<LolLeaderboardPage />} /> */}

        {/* VAL Routes */}
        <Route
          path="/val/*"
          element={
            <div>
              {/* <ValNavbar /> */}

              <Routes>
                <Route path="/" element={<ValHomePage />} />
                {/* <Route path="/leaderboard" element={<ValLeaderboardPage />} /> */}
              </Routes>
            </div>
          }
        />
        {/* <Route path="/val" element={<ValHomePage />} /> */}
      </Routes>
    </Router>
  );
};

export default RouterConfig;
