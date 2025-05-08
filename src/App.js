import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
