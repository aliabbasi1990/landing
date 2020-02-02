import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import ReactSVG from 'react-svg';
import {Row, Column, MainColors, Button, H1, H2, H3} from "../theme.jsx";
import BannerImg from "src/assets/jpg/banner.jpg";

const BannerWrapper = styled(Row)`
    background-color: ${MainColors.brandPrimary};
    width: 100%;
    background-repeat: no-repeat;   
    text-align:center;
    word-wrap: break-word;
    @media only screen and (max-width: 720px) {
        padding: 2rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 2rem;
    }
    @media only screen and (min-width: 960px) {
        padding: 5rem 6rem;
    }
`;
const Text = styled.div`
    color: white;
    @media only screen and (min-width: 960px) {
        text-align: center;
    }
`;
const StyledButton = styled(Button)`
    font-size: 1.5rem;
    padding: 1rem 2.3rem;
    width: 15.5rem;
    margin: 0 2rem;
    position: relative;
    z-index: 1;
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        margin: 0 2rem 1rem 2rem;
    }
    @media only screen and (max-width: 420px) {
        margin: 0 2rem 1rem 2rem;
        padding: 1rem 1rem;
        font-size: 1.4rem;
        width: 12rem;
    }
`;
const StyledH1 = styled(H1)`
    margin-bottom: 3rem;
    font-size: 4.125rem;
    font-weight: 300;
`;
const El1 = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    position: absolute;
    top: 5.438em;
    left: 9%;
    background-color: rgba(255, 255, 255, 0.12);
`;
const El2 = styled.div`
    position: absolute;
    top: 4rem;
    left: 32%;
    height: 0.688rem;
    width: 0.688rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 1px;
`;
const El4 = styled.div`
    position: absolute;
    top: 5.75rem;
    left: 50%;
    height: 1.313rem;
    width: 1.313rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
const El3 = styled.div`
    position: absolute;
    top: 5.063rem;
    left: 74%;
    height: 0.688rem;
    width: 0.688rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
const El5 = styled.div`
    position: absolute;
    top: 21.875rem;
    left: 10%;
    height: 0.938rem;
    width: 0.938rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
const El6 = styled.div`
    position: absolute;
    top: 25.5rem;
    left: 36%;
    height: 0.688rem;
    width: 0.688rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
const El7 = styled.div`
    position: absolute;
    top: 18.125rem;
    left: 70%;
    height: 0.688rem;
    width: 0.688rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
const El8 = styled.div`
    position: absolute;
    top: 26.188rem;
    left: 80%;
    height: 0.688rem;
    width: 0.688rem;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
`;
class Banner extends Component {
    render() {
        return (
           <React.Fragment>
                <BannerWrapper>
                    <Column d="12" t="12" m="12">   
                        <El1 /> 
                        <El2 /> 
                        <El3 />   
                        <El4 /> 
                        <El5 /> 
                        <El6 />
                        <El7 />
                        <El8 />
                        <Text>
                            <StyledH1>Work with Iranian Talents</StyledH1>
                            <Link to='#Hire'><StyledButton className="secondaryFilled">I Want To Hire</StyledButton></Link>
                            <Link to='Work'><StyledButton className="outline">I Want To Work</StyledButton></Link>     
                        </Text>  
                    </Column>
                </BannerWrapper>    
            </React.Fragment>
        )
    }
}
export default Banner;