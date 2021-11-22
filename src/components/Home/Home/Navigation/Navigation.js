
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Book Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-5" href="#home">Home</Nav.Link>
                        <Nav.Link className="ms-5" href="#link">Orders</Nav.Link>
                        <Nav.Link className="ms-5" href="#home">Admin</Nav.Link>
                        <Nav.Link className="ms-5" href="#link">Deals</Nav.Link>
                    </Nav>
                    <Button  className="btn btn-primary ms-5">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;