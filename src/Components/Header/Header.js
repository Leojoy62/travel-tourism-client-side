import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">LJ-Travels</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/packages">Packages</Nav.Link>


                        {user?.email ? <Nav.Link as={HashLink} to="/addnewpackage">Add New Package</Nav.Link> : <Nav.Link></Nav.Link>}
                        {user?.email ? <Nav.Link as={HashLink} to="/myorder/:packageId">My Orders</Nav.Link> : <Nav.Link></Nav.Link>}
                        {user?.email ? <Nav.Link as={HashLink} to="/manageorder">Manage Order</Nav.Link> : <Nav.Link></Nav.Link>}
                        <Navbar.Text>
                            User: <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>
                        {user?.email ? <Button onClick={logOut} variant="warning"> Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;