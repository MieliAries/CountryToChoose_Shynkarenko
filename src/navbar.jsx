import React from "react";
import {Bars, Nav, NavLink, NavMenu} from "./NavbarElements";

function Navbar() {
    return (
        <>
            <Nav className='NavBar'>
                <Bars />

                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Countries' activeStyle>
                        All Countries
                    </NavLink>
                    <NavLink to='/Preferences' activeStyle>
                        Your Preferences
                    </NavLink>
                    <NavLink to='/Profile' activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to='/Login' activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;