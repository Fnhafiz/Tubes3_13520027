import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 160) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='home'
                    smooth={true} duration={500} spy = {true}
                    exact='true' offset={-80}
                    >TubesDNAku</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="test"
                            smooth={true} duration={500} spy = {true}
                            exact='true' offset={-80}
                            >Test</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="search"
                            smooth={true} duration={500} spy = {true}
                            exact='true' offset={-80}
                            >Search</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="upload"
                            smooth={true} duration={500} spy = {true}
                            exact='true' offset={-80}
                            >Upload</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy = {true}
                            exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;