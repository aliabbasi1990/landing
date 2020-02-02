import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import {Row, Column, MainColors, ButtonPrimary, ButtonWarning, Button, H1} from "../components/theme.jsx";


const Wrapper = styled.div`
  position:fixed;
  width:50rem;
  height:60rem;
  text-align: center;
  font-size: 1.5rem; 
  color: ${props => props.theme.mainGray};
  background: ${props => props.theme.mainYellow};
  padding: 3rem
  @media only screen and (min-width: 960px) {
      padding: 4rem;
  }
  display:${props => props.active ? 'block' : 'none'}
`;

class Signin extends Component {
    
    render() {
        return (
           <React.Fragment>
                <Wrapper theme={MainColors} active={this.props.active}>
                    <Row>
                        <Column d="4" t="6" m="12">
                            Footer
                        </Column>
                    </Row>
                </Wrapper>
            </React.Fragment>
        )
    }
}
export default Signin;