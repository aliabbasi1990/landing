import * as React from "react"
import {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider} from "styled-components"
import {Row, Column, MainColors, Button, H1} from "../components/theme.jsx"
// import {PersonalInfo, BusinessInfo, Wrapper, Step3} from "../components/work/workold.jsx";
import Header from "../components/header.jsx";
import ApplyToWork from "../components/work/applyToWork.jsx";
import Footer from "../components/footer.jsx";


class Home extends Component<HomeProps, {}> {
  constructor(props) {
    super(props)
  }
  
  render() {
    return ( 
      <React.Fragment>
        <Header />
        <ApplyToWork />
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home