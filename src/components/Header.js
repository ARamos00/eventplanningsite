import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Import the logo image

// Header Wrapper
const HeaderWrapper = styled.header`
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: var(--header-background);
        color: var(--text-color);
        box-shadow: var(--header-shadow);
`;

// Top Bar Styling
const TopBar = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--header-background);
        margin-bottom: 10px;

        @media (max-width: 768px) {
                flex-direction: column;
                text-align: center;
        }
`;

// Logo Styling
const Logo = styled.div`
        max-width: 100px;

        img {
                max-width: 100%;
                height: auto;
        }

        @media (max-width: 768px) {
                margin-bottom: 10px;
        }
`;

// Centered Container for Contact Info and Search
const CenterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        max-width: 600px;

        @media (max-width: 768px) {
                flex-direction: column;
        }
`;

// Contact Information Styling
const ContactInfo = styled.div`
        font-size: 1rem;
        margin-right: 20px;
        text-align: center;

        @media (max-width: 768px) {
                margin-bottom: 10px;
                margin-right: 0;
        }
`;

// Search Form Styling
const SearchForm = styled(Form)`
        display: flex;
        align-items: center;

        .form-control {
                border-radius: 0;
                margin-right: 5px;
                background-color: var(--background-dark);
                color: var(--text-color);
                border: 1px solid var(--primary-color);
        }

        .btn {
                border-radius: 0;
                background-color: var(--primary-color);
                color: var(--text-color);
                border: none;
        }

        @media (max-width: 768px) {
                flex-direction: column;

                .form-control {
                        margin-right: 0;
                        margin-bottom: 5px;
                }
        }
`;

// Navbar Styling
const StyledNavbar = styled(Navbar)`
        background: var(--header-background);
        box-shadow: var(--header-shadow);
        font-family: 'Lobster', cursive;
`;

// Navigation Container Styling
const StyledNav = styled(Nav)`
        display: flex;
        justify-content: center;
        width: 100%;
`;

// Navigation Item Styling
const NavItem = styled(Nav.Link)`
        color: var(--primary-color);
        font-family: 'Lobster', cursive;
        font-size: 18px;
        padding: 12px 15px;
        margin: 0 5px;
        text-transform: uppercase;
        border: 2px solid transparent;
        transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease;
        cursor: pointer;

        &:hover {
                color: var(--nav-item-hover-color);
                background-color: var(--nav-item-hover-bg);
                border-color: var(--nav-item-hover-bg);
        }
`;

const Header = () => (
    <HeaderWrapper>
            <TopBar>
                    <Logo>
                            <img src={logo} alt="Logo" />
                    </Logo>
                    <CenterContainer>
                            <ContactInfo>
                                    Call us: 123-456-7890
                            </ContactInfo>
                            <SearchForm inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-light">Search</Button>
                            </SearchForm>
                    </CenterContainer>
            </TopBar>
            <StyledNavbar expand="lg" variant="dark" sticky="top">
                    <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                    <StyledNav className="ml-auto">
                                            <LinkContainer to="/">
                                                    <NavItem>Home</NavItem>
                                            </LinkContainer>
                                            <LinkContainer to="/about">
                                                    <NavItem>About</NavItem>
                                            </LinkContainer>
                                            <LinkContainer to="/services">
                                                    <NavItem>Services</NavItem>
                                            </LinkContainer>
                                            <LinkContainer to="/gallery">
                                                    <NavItem>Gallery</NavItem>
                                            </LinkContainer>
                                            <LinkContainer to="/contact">
                                                    <NavItem>Contact</NavItem>
                                            </LinkContainer>
                                    </StyledNav>
                            </Navbar.Collapse>
                    </Container>
            </StyledNavbar>
    </HeaderWrapper>
);

export default Header;








