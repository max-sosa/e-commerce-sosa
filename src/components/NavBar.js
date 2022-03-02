import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./icon/CartWidget";
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light"  expand="lg">
                <Container className="text-success">
                    <Navbar.Brand>
                        <Link to="/">Westen Car Shop</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="contacto">Contacto</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="ubicacion">Ubicación</Link>
                            </Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink to="category/suv-crossovers">
                                        SUV y Crossovers
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="category/camionetas-vans">Camionetas y Vans
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget href="#home" />
                </Container>  
            </Navbar>
        </>
    )
}

export default NavBar
