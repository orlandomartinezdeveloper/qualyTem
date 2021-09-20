import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as ReactstrapNavbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import './index.css';
import Logo from '../../img/qualyteamLogo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <ReactstrapNavbar color="light" light expand="md">
            <NavbarBrand><img src={Logo} className="logo" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink >
                            <Link to="/" className="linkMenu">Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/list" className="linkMenu">Master List</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </ReactstrapNavbar>
    );
}