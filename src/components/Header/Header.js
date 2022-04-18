import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        navigate('/');
    }

    return (
        <Navbar className='header' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Klement <span className='nav-brand'>Tour Guide</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        {
                            user ?
                                <button type='button' onClick={logOut} className='btn btn-link'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;