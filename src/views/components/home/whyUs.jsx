import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, Button, P} from "../theme.jsx";
import ReactSVG from 'react-svg'
import People from 'src/assets/svg/people.svg';
import Connect from 'src/assets/svg/connect.svg';
import Question from 'src/assets/svg/question.svg';
import Bitcoin from 'src/assets/svg/bitcoin.svg';
import Refund from 'src/assets/svg/refund.svg';


const TitleWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 500;
    text-align: center;
    background: rgba(0, 78, 133, 0.05);
    position:relative;
    @media only screen and (max-width: 600px) {
       
    }
    @media only screen and (min-width: 600px) and (max-width: 960px) {
       
    }
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
    @media only screen and (max-width: 420px) {
        font-size: 2.5rem;
        padding: 1rem 0;
    }
`;

const El1 = styled.div`
    position: absolute;
    top:  9.6rem;
    left: 4%;
    height: 0.375rem;
    width: 0.375rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.188rem;
`;
const El2 = styled.div`
    position: absolute;
    top: 8.1rem;
    left: 10%;
    height: 0.875rem;
    width: 0.875rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.313rem;
`;
const El3 = styled.div`
    position: absolute;
    top: 5.6rem;
    left: 16%;
    height: 1.188rem;
    width: 1.188rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.313rem;
`;
const El4 = styled.div`
    position: absolute;
    top: 4.6;
    left: 25%;
    height: 0.625rem;
    width: 0.625rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.313rem;
`;
const El5 = styled.div`
    position: absolute;
    top: 8.1rem;
    left: 29%;
    height: 0.5rem;
    width: 0.5rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.25rem;
`;
const El6 = styled.div`
    position: absolute;
    top: 8.1rem;
    left: 60%;
    height: 0.5rem;
    width: 0.5rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.25rem;
`;
const El7 = styled.div`
    position: absolute;
    top: 5.6rem;
    left: 67%;
    height: 0.625rem;
    width: 0.625rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.313rem;
`;
const El8 = styled.div`
    position: absolute;
    top: 6.6rem;
    left: 77%;
    height: 1.063rem;
    width: 1.063rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.313rem;
`;
const El9 = styled.div`
    position: absolute;
    top: 7.6rem;
    left: 86%;
    height: 0.375rem;
    width: 0.375rem;
    background-color: rgba(0, 78, 133, 0.5);
    border-radius: 0.188rem;
`;
const ContentWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 0 12rem 6rem 12rem;
    font-weight: 500;
    background: rgba(0, 78, 133, 0.05);
    justify-content: center;
    @media only screen and (max-width: 420px) {
        padding: 0 1rem 6rem 1rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        padding: 0 3rem 6rem 3rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 0 5rem 6rem 5rem;
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        padding: 0 5rem 6rem 5rem;
    }
    @media only screen and (min-width: 1280px) {

    }
`;
const StyledColumn = styled(Column)`
    padding: 0 1rem;
    display: flex;
    word-break: break-word;
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        flex-direction: column;
        flex:1 1 auto;
    }
    @media only screen and (max-width: 720px) {
        flex-direction: column;
        flex:1 1 auto;
    }
`;
const Item = styled.div`
    padding: 2.5rem 1.5rem;
`;
const ItemTitle = styled.div`
    color: ${MainColors.brandPrimary};
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    align-items: center;
    @media only screen and (min-width: 420px) {
        display: flex;
    }
`;
const ItemTitleText = styled.div`
    color: ${props => props.theme.blue};
    font-size: 1.375rem;
    font-weight: 500;
    text-align: left;
    margin-left: 1rem;
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        margin-left: 0.5rem;
        font-size: 1.15rem;
    }
    @media only screen and (max-width: 420px) {
        text-align: center;
        margin-left: 0;
    }
`;
const ItemText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    color: ${MainColors.gray800};
`;
class WhyUs extends Component {
    render() {
        return (
           <React.Fragment>
                <TitleWrapper>
                    <El1 />
                    <El2 />
                    <El3 />
                    <El4 />
                    <El5 />
                    <El6 />
                    <El7 />
                    <El8 />
                    <El9 />
                    <StyledTitleColumn d="12" t="12" m="12">
                        <Title>    
                            Why Us?
                        </Title>
                    </StyledTitleColumn>
                </TitleWrapper>
                <ContentWrapper>
                    <StyledColumn d="4" t="12" m="12">
                        <Item>
                            <ItemTitle>
                                <ReactSVG src={People} svgStyle={{ width: '4rem', height: '4rem', fill:MainColors.blue }} />
                                <ItemTitleText>
                                    International Experiences
                                </ItemTitleText>
                            </ItemTitle>
                            <ItemText>
                                We have worked with many companies around the globe.
                            </ItemText>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                        <Item>
                            <ItemTitle>
                                <ReactSVG src={Connect} svgStyle={{ width: '4rem', height: '4rem', fill:MainColors.blue }} />
                                <ItemTitleText>
                                    Always Connected To Your Team
                                </ItemTitleText>
                            </ItemTitle>
                            <ItemText>
                                We are connected with you constantly and will provide you reports and get your feedback.
                            </ItemText>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                        <Item>
                            <ItemTitle>
                                <ReactSVG src={Question} svgStyle={{ width: '4rem', height: '4rem', fill:MainColors.blue }} />
                                <ItemTitleText>
                                    Professional Screening Methods
                                </ItemTitleText>
                            </ItemTitle>
                            <ItemText>
                                We believe ourself and interview talents one by one to insure you get what you are promised.
                            </ItemText>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                        <Item>
                            <ItemTitle>
                                <ReactSVG src={Bitcoin} svgStyle={{ width: '4rem', height: '4rem', fill:MainColors.blue }} />
                                <ItemTitleText>
                                    Pay By Bitcoin
                                </ItemTitleText>
                            </ItemTitle>
                            <ItemText>
                                Our payments are done in Bitcoin. So your money transactions are safe and sound.
                            </ItemText>
                        </Item>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                        <Item>
                            <ItemTitle>
                                <ReactSVG src={Refund} svgStyle={{ width: '4rem', height: '4rem', fill:MainColors.blue }} />
                                <ItemTitleText>
                                    Money-Back Guarantee
                                </ItemTitleText>
                            </ItemTitle>
                            <ItemText>
                                Pay only if satisfied. Every Missing deadline will result in a penalty and you could cancel project on your side alone.
                            </ItemText>
                        </Item>
                    </StyledColumn>
                </ContentWrapper>              
            </React.Fragment>
        )
    }
}
export default WhyUs;