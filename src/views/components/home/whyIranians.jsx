import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled , { keyframes} from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors} from "../theme.jsx";


const TitleWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 500;
    text-align: center;
    position:relative;
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
    top: 9.777rem;
    left: 5%;
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 0.313rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 4.777rem;
    }
`;
const El2 = styled.div`
    position: absolute;
    top: 6.715rem;
    left: 12%;
    height: 0.375rem;
    width: 0.375rem;
    border-radius: 0.188rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 1.715rem;
    }
`;
const El3 = styled.div`
    position: absolute;
    top: 11.84rem;
    left: 17%;
    height: 1.188rem;
    width: 1.188rem;
    border-radius: 0.313rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 6.84;
    }
`;
const El4 = styled.div`
    position: absolute;
    top: 7.965rem;
    left: 21%;
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 0.313rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 2.965rem;
    }
`;
const El5 = styled.div`
    position: absolute;
    top: 10.652rem;
    left: 29%;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.25rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 5.652rem;
    }
`;
const El6 = styled.div`
    position: absolute;
    top: 10.84rem;
    left: 65%;
    height: 1.063rem;
    width: 1.063rem;
    border-radius: 0.313rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 4.777rem;
    }
`;
const El7 = styled.div`
    position: absolute;
    top: 7.652rem;
    left: 75%;
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 0.313rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 2.652rem;
    }
`;
const El8 = styled.div`
    position: absolute;
    top: 10.84rem;
    left: 85%;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.25rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 5.84rem;
    }
`;
const El9 = styled.div`
    position: absolute;
    top: 9.402rem;
    left: 95%;
    height: 0.375rem;
    width: 0.375rem;
    border-radius: 0.188rem;
    background: #00c8e0;
    @media only screen and (max-width: 420px) {
        top: 4.402rem;
    }
`;
const ContentWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 0 5rem;
    justify-content:space-around;
    font-weight: 500;
    margin-bottom: 6rem;
    @media only screen and (max-width: 720px) {
        padding: 0 1rem;
        margin-bottom: 3rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
       
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        padding: 0 2rem;
    }
    @media only screen and (min-width: 1280px) {
        padding: 0 9rem;
    }
`;
const StyledColumn = styled(Column)`
    padding: 2.5rem 1.5rem;
    word-break: break-word;
    box-shadow: 0em 0.063em 0.25em 0em rgba(0, 0, 0, 0.2), 0em 0em 0.063em -0.062em rgba(0, 0, 0, 0.12), 0em 0em 0.063em 0em rgba(0, 0, 0, 0.14);
    background-color: white;
    border-radius: 8px;
    transition: transform 300ms linear;
    transition-delay:0.1s;
    margin: 2rem;
    position: relative;
    z-index:1;
    &:hover {
        transform: translate(0, -1.5rem);
        box-shadow: 0em 0.5em 0.625em -0.312em rgba(0, 0, 0, 0.1), 0em 0.188em 1.875em 0.313em rgba(0, 0, 0, 0.05), 0em 0.813em 1.5em 0.125em rgba(0, 0, 0, 0.05);
    }
    @media only screen and (max-width: 420px) {
        margin: 1.2rem 2rem;
        flex-direction: column;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 960px){
        flex: 1
    }
`;
const ItemTitle = styled.div`
    color: ${MainColors.brandPrimary};
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    @media only screen and (max-width: 420px) {
        font-size: 1.8rem;
    }
`;
const ItemText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    color: ${MainColors.gray800};
`;
class WhyIranians extends Component {
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
                            Why Iranians?
                        </Title>
                    </StyledTitleColumn>
                </TitleWrapper>
                <ContentWrapper>
                    <StyledColumn d="4" t="12" m="12">
                            <ItemTitle>
                                Professional
                            </ItemTitle>
                            <ItemText>
                                Iranian talents are among the best in the world, many of persian professionals are headhunted by American or Europian companies.
                            </ItemText>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                            <ItemTitle>
                                Practical
                            </ItemTitle>
                            <ItemText>
                                Iranian programmers are all educated and many self-educated that makes them to be very practical developers.
                            </ItemText>
                    </StyledColumn>
                    <StyledColumn d="4" t="12" m="12">
                            <ItemTitle>
                                Competitive
                            </ItemTitle>
                            <ItemText>
                                Hourly rate of Iranian programmers are very competitive yet they deliver a high quality result.
                            </ItemText>
                    </StyledColumn>
                </ContentWrapper>               
            </React.Fragment>
        )
    }
}
export default WhyIranians;