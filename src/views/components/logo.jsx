import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {MainColors} from "./theme.jsx";

const StyledLogo = styled.div`
    font-size: 4rem;
    color: ${props => props.theme.mainYellow};
    float:left;
    @media only screen and (max-width: 599px) {
        text-align: center;
        width: 100%;
    }
    @media only screen and (min-width: 600px) and (max-width: 959px) {
        padding-left: 5%;
    }
    @media only screen and (min-width: 960px) {
        padding-left: 15%;
    }
    
`;
const XAlp = styled.span`
    color: ${props => props.theme.mainGray};
`;
class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledLogo theme={MainColors}>
                    E<XAlp theme={MainColors}>X</XAlp>TOPO
                </StyledLogo>
            </React.Fragment>
        )
    }
}
export default Logo;