import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="instagram.com/fnhafiz">Farhan Hafiz</FooterLink>
                                <FooterLink to="/signin">Ilham Pratama</FooterLink>
                                <FooterLink to="/signin">Haidar Ihzaulhaq</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo Logo to ='/'>
                            Tubes 3 Stima
                        </SocialLogo>
                        <WebsiteRights>TubesDNAku © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
