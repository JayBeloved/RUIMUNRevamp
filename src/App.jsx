import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ThemePage from './pages/ThemePage';
import Registration from './pages/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess';
// import ExportPage from './pages/ExportPage';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          {/* <Route path="/export" element={<ExportPage />} /> */}
          <Route path="/admin" element={<Dashboard />} /> {/* Add the admin route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
