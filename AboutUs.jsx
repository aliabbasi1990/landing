import * as React from "react"
import {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider} from "styled-components"
import {Row, Column, MainColors, Button, H1} from "../components/theme.jsx"
// import {PersonalInfo, BusinessInfo, Wrapper, Step3} from "../components/work/workold.jsx";
import Header from "../components/header.jsx";
import AboutUsBanner from "../components/aboutUs/aboutUsBanner.jsx";
import MainMembers from "../components/aboutUs/mainMembers.jsx";
import Footer from "../components/footer.jsx";

class AboutUs extends Component {
  constructor(props){
      super(props)
  
  }
  render() {
    return ( 
      <React.Fragment>
        <Header />
        <AboutUsBanner/>
        <MainMembers/>
        <Footer />
      </React.Fragment>
    )
  }
}
export default AboutUs;
