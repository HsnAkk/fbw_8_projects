import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Navbar.Brand href="/">FBW-8</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="mr-2">Home</Nav.Link>
                        <Nav.Link href="/how_you_doing" className="mr-2" >How you doing</Nav.Link>
                        <Nav.Link href="/wawawiwa" className="mr-2">Wawawiwa</Nav.Link>
                        <Nav.Link href="/albatros" className="mr-2">Albatros</Nav.Link>
                        <Nav.Link href="/tom&jerry" className="mr-2">Tom & Jerry</Nav.Link>
                        <Nav.Link href="/be_guys" className="mr-2">BE Guy's</Nav.Link>
                        <Nav.Link href="/vins" className="mr-2">Vins</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
