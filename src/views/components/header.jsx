import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, Button, H1} from "../components/theme.jsx";
import Logo from "../components/logo.jsx";

const Menu = styled(Row)`
    background-color: ${MainColors.brandPrimary};
    padding: 1rem 1rem;
    @media only screen and (min-width: 960px) {
        padding: 1rem 5%;
    }
`;
const StyledLogo = styled(Link)`
    color: white;
    margin: 0 0.5rem;
    font-size: 2rem;

    @media only screen and (min-width: 960px) {
        margin: 0 1rem;
    }
`; 
const StyledLink = styled(Link)`
    color: white;
    margin: 0 0.5rem;
    line-height: 3rem;
    @media only screen and (min-width: 960px) {
        margin: 0 1.5rem;
    }
    
`; 
const StyledColumn = styled(Column)`
   text-align: right;
`;
class Header extends Component {
    render() {
        return (
           <React.Fragment>
                <Menu theme={MainColors}>
                    <Column d="3" t="3" m="12">
                        <StyledLogo theme={MainColors} to="/">Extopo</StyledLogo>
                    </Column>
                    <StyledColumn d="9" t="9" m="12">
                        <StyledLink to="/#howItWorks">How it works</StyledLink>
                        <StyledLink to="/#services">Our services</StyledLink>
                        <StyledLink to="/#contactUs">Contact us</StyledLink>
                        <StyledLink to="/#aboutUs">About Us</StyledLink>
                        <Link to="/#signin"><Button className="small outline">Sign in</Button></Link>
                    </StyledColumn>
                </Menu>
            </React.Fragment>
        )
    }
}
export default Header;