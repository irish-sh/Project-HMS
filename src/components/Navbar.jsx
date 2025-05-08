// components/Navbar.js
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Hospital System</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link as={Link} to="/patients">Patients</Nav.Link>
        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
        <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default AppNavbar;
