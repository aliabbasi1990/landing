import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import Info from "src/assets/svg/info.svg";

const ErrorWrapper = styled.div`
  widthL 100%;
  color: ${MainColors.errorPrimary}
`;
const ErrorText = styled.div`
  float: left;
  font-size: 0.75rem;
  margin: 0.2rem;
`;
const StyledReactSVG = styled(ReactSVG)`
  path {
    fill: ${MainColors.errorPrimary};
  }
`;
class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <ErrorWrapper>
          <StyledReactSVG
            src={Info}
            svgStyle={{
              width: "1rem",
              height: "1rem",
              float: "left",
              margin: "0.2rem"
            }}
          />
          <ErrorText>{this.props.children}</ErrorText>
        </ErrorWrapper>
      </React.Fragment>
    );
  }
}
export default Error;
