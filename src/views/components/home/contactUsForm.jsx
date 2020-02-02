import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, Button} from "../theme.jsx";
import ReactSVG from 'react-svg'

const Form = styled.form`
    width: 50%;
    margin: auto;
    text-align: left;
    color: ${MainColors.brandPrimaryDark};
    font-size: 1.25rem;
    font-weight: 300;
    .input, .textarea {
        background: white;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        width: 100%;
        height: 3.5rem;
        margin: 1rem 0 2rem 0;
        font-size: 1rem;
        padding: 1rem;
        font-weight: 300;
    }
    .textarea {
        height: 10rem;
        font-size:1.2rem;
    }
    @media only screen and (max-width: 499px) {
        width: 80%;
        .input, .textarea {
            height: 2.7rem;
            margin: 1rem 0 1.5rem 0;
            font-size: 0.8rem;
            padding: 0.8rem;
            font-weight: 300;
        }
        .textarea {
            height: 7rem;
            font-size:0.8rem;
        }
    }
    @media only screen and (min-width: 499px) and (max-width: 600px) {
        width: 75%;
        .input, .textarea {
            height: 2.7rem;
            margin: 1rem 0 1.5rem 0;
            font-size: 0.8rem;
            padding: 0.8rem;
            font-weight: 300;
        }
        .textarea {
            height: 7rem;
            font-size:0.8rem;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 720px) {
        width: 70%;
        .textarea {
            height: 7rem;
        }
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        width: 65%;
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        width: 55%;
    }
`;
const StyledButton = styled(Button)`
    font-size: 1.25rem;
    float: right;
    margin: 0;
    padding: 0.875rem 2.625rem;
`;
class ContactUsForm extends Component {
  
    render() {
        return (
           <React.Fragment>
                <Form>
                    <label for="email">Your email</label><br />
                    <input className="input" type="text" id="email" />
                    <label for="title">Title</label><br />
                    <input className="input" type="text" id="title" />
                    <label for="description">Description</label><br />
                    <textarea className="textarea" row="5" id="description"></textarea>
                    <StyledButton className="small secondaryFilled">Submit</StyledButton>
                </Form>  
            </React.Fragment>
        )
    }
}
export default ContactUsForm;