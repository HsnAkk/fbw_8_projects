import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Navbar.Brand href="/">FBW-8</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="mr-2" >Home</Link>
                        <Link to="/how_you_doing" className="mr-2" >How you doing</Link>
                        <Link to="/wawawiwa" className="mr-2" >Wawawiwa</Link>
                        <Link to="/albatros" className="mr-2" >Albatros</Link>
                        <Link to="/tom&jerry" className="mr-2" >Tom & Jerry</Link>
                        <Link to="/be_guys" className="mr-2" >BE Guy's</Link>
                        <Link to="/vins" className="mr-2" >Vins</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
