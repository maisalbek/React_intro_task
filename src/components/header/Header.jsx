import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css"


const Header = (props) => {
    return (
        <div>
            <Navbar id="navbar-con" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-warning'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"className='text-warning'>Home</Nav.Link>
                        <Nav.Link href="#link"className='text-warning'>Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;