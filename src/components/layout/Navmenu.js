import React from 'react';
import { Navbar, Form, NavDropdown, FormControl, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navmenu extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Link to="/">djIMDB</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/movies">Movies</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            <NavDropdown title="Actions" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/contact">Contact</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/about">About</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/tos">T.O.S.</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                            <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                            <Button variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Navmenu;