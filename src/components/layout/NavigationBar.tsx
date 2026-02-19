import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutButton from "../common/LogoutButton.tsx";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Usamos 'as={Link}' para que Bootstrap se comporte como un router link */}
                <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <LogoutButton/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;