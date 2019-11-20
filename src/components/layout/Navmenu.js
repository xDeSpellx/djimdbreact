import React from 'react';
import { Navbar, Form, NavDropdown, FormControl, Button, Nav, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'
import Popup from './Popup'

class Navmenu extends React.Component {

    onChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    login = () => {
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        let wait = null;
        let logInPanel = null;
        let popupError = (<Popup show={this.props.errorMessage} closeMSG={this.props.closeMSG} />)


        if (this.props.iswait) {
            wait = (<Spinner animation="border" />)
        }
        else {          

            if (this.props.isLogged) {
            logInPanel = (<div><p>Logged in as {this.props.logedUserame} </p><Button variant="outline-success" onClick={this.props.logout} >Logout</Button></div>);
            }
            else {
                logInPanel = (<Form inline>
                    <FormControl onChange={this.onChangeUsername} type="text" placeholder="Username" className="mr-sm-2" />
                    <FormControl onChange={this.onChangePassword} type="password" placeholder="Password" className="mr-sm-2" />
                    <Button type="submit" variant="outline-success" onClick={this.login} >Login</Button>
                </Form>);
            }
        }

        return (
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
                    {popupError}
                    {logInPanel}
                    {wait}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged.isLoggedIn,
        iswait: state.isLogged.wait,
        errorMessage: state.isLogged.errorMessage,
        logedUserame:state.isLogged.user,
        token:state.isLogged.token
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (username, password) => dispatch(login(username, password)),
//         logout: () => dispatch(logout()),
//         closeMSG: () => dispatch(closeMSG())
//     }
// }

export default connect(mapStateToProps, actions)(Navmenu);