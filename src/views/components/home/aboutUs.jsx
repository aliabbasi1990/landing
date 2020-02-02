import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors} from "../theme.jsx";


const TitleWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 500;
    text-align: center;
    background: rgba(0, 78, 133, 0.05);
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
const ContentWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 0 5rem 6rem 5rem;
    font-weight: 500;
    background: rgba(0, 78, 133, 0.05);
    justify-content: center;
    @media only screen and (max-width: 420px) {
        padding: 0 1rem 3rem 1rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        padding: 0 3rem 4rem 3rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 0 3rem 4rem 3rem;
    }
    @media only screen and (min-width: 960px) {

    }
`;
const Text = styled.div`
    padding: 0 6rem;
    word-break: break-word;
    font-size: 1.3rem;
    font-weight: 300;
    line-height:2rem;
    color: ${MainColors.gray800};
    margin-top:1rem;
    @media only screen and (max-width: 720px) {
        padding: 0;
        font-size: 1.2rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        font-size: 1.3rem;
        padding: 0 3rem;
    }
    @media only screen and (min-width: 960px) {
        padding: 0 3rem;
    }
`;
const Item = styled.div`
    padding: 0 2rem;
    font-size: 1.3rem;
    font-weight: 100;
    color: ${props => props.theme.gray};
`;
class AboutUs extends Component {
    render() {
        return (
           <React.Fragment>
                <TitleWrapper>
                    <Column d="12" t="12" m="12">
                        <Title theme={MainColors}>    
                            About Us
                        </Title>
                    </Column>
                </TitleWrapper>
                <ContentWrapper>
                    <Column d="12" t="12" m="12">
                        <Text theme={MainColors}>
                            We started as a software company with experienced developers and researchers from Iran, cost of development are half of the world standards in Iran and it's a very good opportunity for companies to hire iranian talents.<br />
                            We decided to use our extensive network of talents connections to provide a strong channel between Iranian talents and companies around the globe, communication has been always a problem and obstacle in fornt of the many remote projects specially when it comes to a country like Iran problems like money transfer, language, trust and cultural differences could all sabotage a good experience 
                            We are here to address these obstacles along with alot more!
                        </Text>
                    </Column>
                    <Column d="6">
                        {/* <Item>
                            <ImgWrapper>
                                
                            </ImgWrapper>
                        </Item> */}
                    </Column>
                </ContentWrapper>              
            </React.Fragment>
        )
    }
}
export default AboutUs;