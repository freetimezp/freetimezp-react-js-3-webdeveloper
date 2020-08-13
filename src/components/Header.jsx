import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import logo from '../logo192.png';

import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/blog" component={Blog}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;