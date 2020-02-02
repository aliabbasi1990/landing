import * as React from "react"
import {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider} from "styled-components"
import {Row, Column, Primary, Warning, Button, H1} from "../components/theme.jsx"
import Header from "../components/header.jsx";
import Banner from "../components/home/banner.jsx";
import WhyIranians from "../components/home/whyIranians.jsx";
import WhyUs from "../components/home/whyUs.jsx";
import Fields from "../components/home/fields.jsx";
import AboutUs from "../components/home/aboutUs.jsx";
import JoinUs from "../components/home/joinUs.jsx";
import ContactUs from "../components/home/contactUs.jsx";
import Footer from "../components/footer.jsx";

type HomeProps = { //add props here ( FLOW SYNTAX)

}
class Home extends Component<HomeProps, {}> {
  constructor(props) {
    super(props)
  }
  
  render() {
    return ( 
      <React.Fragment>
        <Header />
        <Banner />
        <WhyIranians />
        <WhyUs />
        <Fields />
        <AboutUs />
        <JoinUs />
        <ContactUs />
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home