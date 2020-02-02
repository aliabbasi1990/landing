import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, Button } from "../theme.jsx";
import ReactSVG from 'react-svg';
import Frontcode from 'src/assets/svg/frontcode.svg';
import Code from 'src/assets/svg/code.svg';
import Mobiledev from 'src/assets/svg/mobiledev.svg';
import Ai from 'src/assets/svg/ai.svg';
import Uiux from 'src/assets/svg/uiux.svg';
import Design from 'src/assets/svg/design.svg';

const TitleWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 500;
    text-align: center;
    @media only screen and (min-width: 960px) {
        padding: 6rem;
    }
`;
const StyledTitleColumn = styled(Column)`
    z-index: 1;
`;
const Title = styled.span`
    padding: 3rem;
    color: ${MainColors.brandPrimaryDark};
    font-size: 3.2rem;
    text-align: center;
    padding: 1.5rem 0;
    border-bottom: 4px solid;
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        font-size: 2.3rem;
    }
    @media only screen and (max-width: 420px) {
        font-size: 1.7rem;
        padding: 0.8rem 0;
    }
`;

const ContentWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 0 12rem;
    font-weight: 500;
    margin-bottom: 6rem;
    @media only screen and (max-width: 420px) {
        padding: 1rem;
        margin-bottom: 2rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        padding: 0 2rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 0 4rem;
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        padding: 0 4rem;
    }
`;
const StyledColumn = styled(Column)`
    padding: 1rem;
    display: flex;
    word-break: break-word;
`;
const Item = styled.div`
    padding: 2.5rem 1.5rem;
    box-shadow: 0em 0.063em 0.25em 0em rgba(0, 0, 0, 0.2), 0em 0em 0.063em -0.062em rgba(0, 0, 0, 0.12), 0em 0em 0.063em 0em rgba(0, 0, 0, 0.14);
    background-color: white;
    border-radius: 8px;
    width: 100%;
    @media only screen and (max-width: 420px) {
        padding: 0.8rem 0.5rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        padding: 2.5rem 1.5rem;
        flex:0 0 auto;
    }
    
`;
const IconWrapper = styled.div`
    text-align:center;
`;
const ItemTitle = styled.div`
    color: ${MainColors.brandPrimary};
    text-align: center;
    font-size: 2.063rem;
    font-weight: 400;
    height: 73px;
    margin-bottom: 1.75rem;
    line-height: 2.5rem;
    padding: 1.25rem 0;
    @media only screen and (max-width: 420px) {
        font-size: 1.5rem;
        line-height: 1.6rem;
        margin-bottom: 0.5rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        font-size: 1.9rem;
        line-height: 2rem;
        margin-bottom: 1.4rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        font-size: 1.9rem;
        line-height: 2.2rem;
        margin-bottom: 1.4rem;
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        font-size: 1.9rem;
    }
`;
const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 3rem;
`;
const StyledButton = styled(Button)`
    &:hover {
        color: white;
        background-color: ${MainColors.brandSecondary}
    }
`;
class Fields extends Component {
    render() {
        return (
           <React.Fragment>
                <TitleWrapper>
                    <StyledTitleColumn d="12" t="12" m="12">
                        <Title>    
                            Our Fields of Work
                        </Title>
                    </StyledTitleColumn>
                </TitleWrapper>
                <ContentWrapper>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Frontcode} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                Front-End Programming
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#frontEndProgramming'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Code} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                Back-End Programming
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#backEndProgramming'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Mobiledev} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                Mobile App Development
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#mobileAppDevelopment'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Ai} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                Machine Learning
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#machineLearning'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Uiux} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                UI / UX Design
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#uiUxDesign'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="6" m="12">
                        <Item>
                            <IconWrapper>
                                <ReactSVG src={Design} svgStyle={{ width: '4.5rem', height: '4.5rem' }} />
                            </IconWrapper>
                            <ItemTitle>
                                Graphic Design
                            </ItemTitle>
                            <ButtonWrapper>
                                <Link to='#graphicDesign'><StyledButton className="small secondaryOutline">Learn More</StyledButton></Link>
                            </ButtonWrapper>
                        </Item>
                    </StyledColumn>
                </ContentWrapper>               
            </React.Fragment>
        )
    }
}
export default Fields;