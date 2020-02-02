import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, Button} from "../theme.jsx";
import ReactSVG from 'react-svg'
import ContactUsForm from './contactUsForm.jsx';

const TitleWrapper = styled(Row)`
    font-size: 1.5rem;
    padding: 2rem;
    font-weight: 500;
    text-align: center;
    @media only screen and (max-width: 420px) {
        padding: 1rem;
        margin-bottom:1rem;
    }
    @media only screen and (min-width: 420px) and (max-width: 720px) {
        margin-bottom:1rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 2rem 2rem 4rem 2rem;
        margin-bottom:1rem;
    }
    @media only screen and (min-width: 960px) {
        padding: 6rem;
    }
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
    padding: 0 10rem;
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
class ContactUs extends Component {
    render() {
        return (
           <React.Fragment>
                <TitleWrapper>
                    <Column d="12" t="12" m="12">
                        <Title>    
                            Contact Us
                        </Title>
                    </Column>
                </TitleWrapper>
                <ContentWrapper>
                    <Column d="12" t="12" m="12">
                        <ContactUsForm />
                    </Column>
                </ContentWrapper>      
            </React.Fragment>
        )
    }
}
export default ContactUs;