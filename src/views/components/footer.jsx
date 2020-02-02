import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors} from "../components/theme.jsx";
import Logo from "../components/logo.jsx";
import ReactSVG from 'react-svg';
import Twitter from 'src/assets/svg/twitter.svg';
import Instagram from 'src/assets/svg/instagram.svg';

const Wrapper = styled.div`
    text-align: center;
    font-size: 0.75rem; 
    color: ${MainColors.gray600};
    padding: 3rem;
    box-shadow: 0px -1px 0px 0px rgba(189, 189, 189, 1);
    @media only screen and  (max-width: 720px) {
        padding:0.5rem;
     }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
       padding:0.5rem;
    }
    @media only screen and (min-width: 960px) {
        padding: 1rem 3rem 0 3rem;
    }
`;
const Left = styled.div`
    text-align: left;
    @media only screen and  (max-width: 720px) {
            line-height:1.3rem;
     }
    
`;
const Middle = styled.div`
    text-align: right;
    a {
        margin: 1rem 0.68rem;
    }
    @media only screen and  (max-width: 720px) {
        text-align: left !important;
        a {
            margin:0rem 0.6rem 0rem 0rem;
            line-height:1.3rem;
        }
     }
`;
const Right = styled.div`
    text-align: left;
    @media only screen and  (max-width: 720px) {
        text-align: right;
     }
`;
class Footer extends Component {
    render() {
        return (
           <React.Fragment>
                <Wrapper>
                    <Row>
                        <Column d="6" t="6" m="12">
                            <Left>Made with LOVE by Extopo. 2018 All rights reserved</Left>
                        </Column>
                        <Column d="4" t="4" m="8">
                            <Middle>
                                <Link to="#terms">Terms and Conditions</Link>
                                <Link to="#terms">Privacy Policy</Link>
                            </Middle>
                        </Column>
                        <Column d="2" t="2" m="4">
                            <Right>
                            <Link to="#Instagram">
                                    <ReactSVG src={Instagram} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0.5rem', fill:MainColors.blue }} />
                                </Link>
                                <Link to="#Twitter">
                                    <ReactSVG src={Twitter} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0.5rem;', fill:MainColors.blue }} />
                                </Link>                                
                            </Right>
                        </Column>
                    </Row>
                </Wrapper>
            </React.Fragment>
        )
    }
}
export default Footer;