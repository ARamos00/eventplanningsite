import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <FooterLinks>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/services">Services</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
            <FooterSocials>
                <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </SocialLink>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </SocialLink>
            </FooterSocials>
            <FooterText>&copy; 2024 Event Planning. All rights reserved.</FooterText>
        </FooterContent>
    </FooterContainer>
);

const FooterContainer = styled.footer`
    background: var(--footer-background);
    color: white;
    padding: 2rem 1rem;
    position: relative;
    width: 100%;
    bottom: 0;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
    color: var(--text-color);
    margin: 0 10px;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primary-color);
    }
`;

const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const SocialLink = styled.a`
    color: var(--text-color);
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primary-color);
    }
`;

const FooterText = styled.p`
    font-size: 1rem;
`;

export default Footer;


