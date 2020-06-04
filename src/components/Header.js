import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Navbar.Brand href="/" style={{fontWeight: 'bold', marginRight: '40px'}}>FBW-8</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="link" >Home</Link>
                        <Link to="/how_you_doing" className="link" >How you doing</Link>
                        <Link to="/wawawiwa" className="link" >Wawawiwa</Link>
                        <Link to="/albatros" className="link" >Albatros</Link>
                        <Link to="/tom&jerry" className="link" >Tom & Jerry</Link>
                        <Link to="/be_guys" className="link" >Backend Guy's</Link>
                        <Link to="/vins" className="link" >Vins</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
