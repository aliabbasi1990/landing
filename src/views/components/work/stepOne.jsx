import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import {
  Form,
  Field,
  FieldTitle,
  Status,
  FiledTitleIcon,
  Input,
  SumbitButton,
  StyledReactSVG
} from "../forms/form.jsx";
import Select from "../forms/select.jsx";
import Error from "../forms/error.jsx";
import ProvinceSelect from "./provinceSelector.jsx";
import ProgressBar from "../forms/progressbar";
import SkypeIcon from "src/assets/svg/skype.svg";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isWorkerTypeSelected: false,
      completedStep: 0,
      workerType: "init",
      firstName: "init",
      lastName: "init",
      province: "init",
      town: "init",
      email: "init",
      phone: "init",
      skypeId: "init"
    };
    this.handleShowForms = this.handleShowForms.bind(this);

    this.workerType = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    // province = React.createRef();
    // town = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.skypeId = React.createRef();
  }

  handleShowForms() {
    this.setState({
      isWorkerTypeSelected: true
    });
  }
  handleSubmit() {
    this.setState({
      workerType: this.workerType.current.value,
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      // province: this.province.current.value,
      // town: this.town.current.value,
      email: this.email.current.value,
      phone: this.phone.current.value,
      skypeId: this.skypeId.current.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Field>
            <FieldTitle>I am ...</FieldTitle>
            <Status />
            <Select
              optionType="sOption"
              onClick={this.handleShowForms}
              reference={this.workerType}
            />
          </Field>
        </Form>
        {this.state.isWorkerTypeSelected === true ? (
          <React.Fragment>
            <Form title="Genereal Information">
              <Field>
                <FieldTitle>First name</FieldTitle>
                <Status className={this.state.firstName === "" && "error"} />
                <Input ref={this.firstName} />
                {this.state.firstName === "" && (
                  <Error>This field cannot be empty</Error>
                )}
              </Field>
              <Field>
                <FieldTitle>Last name</FieldTitle>
                <Status className={this.state.lastName === "" && "error"} />
                <Input ref={this.lastName} />
                {this.state.lastName === "" && (
                  <Error>This field cannot be empty</Error>
                )}
              </Field>
              {/* <ProvinceSelect /> */}
            </Form>
            <Form title="Contact Information">
              <Field>
                <FieldTitle>Email address</FieldTitle>
                <Status className={this.state.email === "" && "error"} />
                <Input ref={this.email} />
                {this.state.email === "" && (
                  <Error>This field cannot be empty</Error>
                )}
              </Field>
              <Field>
                <FieldTitle>Phone Number</FieldTitle>
                <Status className={this.state.phone === "" && "error"} />
                <Input ref={this.phone} placeholder="Example: +989123456789" />
                {this.state.phone === "" && (
                  <Error>This field cannot be empty</Error>
                )}
              </Field>
              <Field>
                <FieldTitle>Skype</FieldTitle>
                <FiledTitleIcon>
                  <StyledReactSVG
                    src={SkypeIcon}
                    svgStyle={{
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </FiledTitleIcon>
                <Status className={this.state.skypeId === "" && "error"} />
                <Input ref={this.skypeId} placeholder="Skype ID" />
                {this.state.skypeId === "" && (
                  <Error>This field cannot be empty</Error>
                )}
              </Field>
            </Form>
            <SumbitButton onClick={this.handleSubmitStepOne}>
              Next Step
            </SumbitButton>
          </React.Fragment>
        ) : (
          <span />
        )}
      </React.Fragment>
    );
  }
}
export default StepOne;
