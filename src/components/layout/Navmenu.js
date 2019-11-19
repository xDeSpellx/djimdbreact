import React from 'react';
import { Navbar, Form, NavDropdown, FormControl, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navmenu extends React.Component{  
    
    onChangeUsername = (event) =>{        
        this.setState({username : event.target.value})            
    }

    onChangePassword = (event) =>{        
        this.setState({password : event.target.value})           
    }

    login = ()=>{
        this.props.dispatch({
            type: 'LOGIN',
            payload: {username:this.state.username, password:this.state.password}
        });        
    }
    
    render(){
        let logInPanel = null;

        if(this.props.isLogged){            
            logInPanel=(<Button variant="outline-success" onClick={this.props.logOut} >Logout</Button>);
        }
        else{
            logInPanel=(<Form inline>
                <FormControl onChange={this.onChangeUsername} type="text" placeholder="Username" className="mr-sm-2" />
                <FormControl onChange={this.onChangePassword} type="password" placeholder="Password" className="mr-sm-2" />
                <Button variant="outline-success" onClick={ this.login } >Login</Button>
            </Form>);
        }

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
                        {logInPanel}
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

const mapStateToProps = state =>{
    return{
        isLogged:state.isLogged.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navmenu);