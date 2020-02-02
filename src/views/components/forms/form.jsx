import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import Code from "src/assets/svg/code.svg";
import Design from "src/assets/svg/design.svg";
import Select from "./select.jsx";
const FormWrapper = styled.div`
  width: 100%;
  padding: 0;
`;
const Title = styled.div`
  color: ${MainColors.gray800};
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const InputsWrapper = styled.div`
  background-color: white;
  border-radius: 0.5em;
  padding: 2.5rem;
  float: left;
  width: 100%;
  margin-bottom: 3rem;
  box-shadow: 0em 0.063em 0.25em 0em rgba(0, 0, 0, 0.2),
    0em 0em 0.063em -0.062em rgba(0, 0, 0, 0.12),
    0em 0em 0.063em 0em rgba(0, 0, 0, 0.14);
`;
const Field = styled.div`
  width: 100%;

  float: left;
  margin: 0.5rem 0;
`;
const FieldTitle = styled.div`
  color: ${MainColors.gray800};
  font-size: 1rem;
  float: left;
  margin-bottom: 0.5rem;
`;
const Status = styled.div`
  height: 0.458em;
  width: 0.458em;
  background-color: rgba(0, 78, 133, 0.38);
  border-radius: 0.438em;
  float: right;
  margin-top: 0.5rem;

  &.error {
    background-color: ${MainColors.errorPrimary};
  }
`;
const FiledTitleIcon = styled.div`
  height: 1em;
  width: 1rem;
  float: left;
  margin: 0.2rem 0 0 0.3rem;
`;
const Input = styled.input`
  width: 100%;
  border: 0.063em solid ${MainColors.gray400};
  border-radius: 0.25em;
  font-size: 1rem;
  color: ${MainColors.gray800};
  float: left;
  height: 3rem;
  font-weight: 300;
  padding: 0.75rem;

  &::-webkit-input-placeholder {
    color: ${MainColors.gray400};
  }
  &::-ms-input-placeholder {
    color: ${MainColors.gray400};
  }
  &::placeholder {
    color: ${MainColors.gray400};
  }
`;

const SumbitButton = styled.div`
  border-radius: 0.25rem;
  background-color: ${MainColors.brandSecondary};
  width: 100%;
  font-size: 1.125rem;
  text-align: center;
  float: left;
  color: white;
  padding: 1rem;
  cursor: pointer;
`;

const StyledReactSVG = styled(ReactSVG)`
  path {
    fill: ${MainColors.gray800};
  }
`;
class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <FormWrapper>
          <Title>{this.props.title}</Title>
          <InputsWrapper>{this.props.children}</InputsWrapper>
        </FormWrapper>
      </React.Fragment>
    );
  }
}
export {
  Form,
  Field,
  FieldTitle,
  Status,
  FiledTitleIcon,
  Input,
  SumbitButton,
  StyledReactSVG
};
