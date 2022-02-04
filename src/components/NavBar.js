import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./icon/CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light"  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Westen Car Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">SUV y Crossovers</Nav.Link>
                            <Nav.Link href="#link">Camionetas y Vans</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget href="#home" />
                </Container>  
            </Navbar>
        </>
    )
}

export default NavBar
