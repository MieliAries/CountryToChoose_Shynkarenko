import React from "react";
import {Bars, Nav, NavLink, NavMenu} from "./NavbarElements";
import countryLogo from "./images/countryLogo.png";

function Navbar() {
    return (
        <>
            <Nav className='NavBar'>
                <Bars />
                <NavMenu>
                    <NavLink to='/Home'>
                        Home
                    </NavLink>
                    <NavLink to='/Countries'>
                        All Countries
                    </NavLink>
                    <NavLink to='/Preferences'>
                        Your Preferences
                    </NavLink>
                    <NavLink to='/Login'>
                        Login
                    </NavLink>
                    <NavLink to='/Profile'>
                        Profile
                    </NavLink>
                </NavMenu>
                <img src={countryLogo} alt="swedenflag" style ={{
                    height: '50%',
                marginRight: '40%'}}/>
            </Nav>
        </>
    );
}

export default Navbar;