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
import MultiSelect from "../forms/multiSelect.jsx";
import Error from "../forms/error.jsx";
import ProvinceSelect from "./provinceSelector.jsx";
import ProgressBar from "../forms/progressbar";
import SkypeIcon from "src/assets/svg/skype.svg";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workerType: "init",
      firstName: "init",
      lastName: "init",
      province: "init",
      town: "init",
      email: "init",
      phone: "init",
      skypeId: "init"
    };
    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  workerType = React.createRef();
  firstName = React.createRef();
  lastName = React.createRef();
  // province = React.createRef();
  // town = React.createRef();
  email = React.createRef();
  phone = React.createRef();
  skypeId = React.createRef();

  handleAddSkill() {
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
        <Form title="Skills">
          <Field>
            <FieldTitle>What are your professions?</FieldTitle>
            <Status className={this.state.firstName === "" && "error"} />
            <MultiSelect
              optionType="option"
              onClick={this.handleAddSkill}
              reference={this.workerType}
              options={[
                "PHP",
                "Node",
                "ReactJs",
                "Android Developer",
                "Java",
                "Python"
              ]}
            />
          </Field>
          <Field>
            <FieldTitle>Years of Experience</FieldTitle>
            <Status className={this.state.lastName === "" && "error"} />
            <Input ref={this.lastName} />
            {this.state.lastName === "" && (
              <Error>This field cannot be empty</Error>
            )}
          </Field>
        </Form>
        <Form title="Portfolio">
          <Field>
            <FieldTitle>Linkedin</FieldTitle>
            <Status className={this.state.email === "" && "error"} />
            <Input ref={this.email} />
            {this.state.email === "" && (
              <Error>This field cannot be empty</Error>
            )}
          </Field>
          <Field>
            <FieldTitle>Github</FieldTitle>
            <Status className={this.state.phone === "" && "error"} />
            <Input ref={this.phone} placeholder="Example: +989123456789" />
            {this.state.phone === "" && (
              <Error>This field cannot be empty</Error>
            )}
          </Field>
          <Field>
            <FieldTitle>Other link</FieldTitle>
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
        <SumbitButton onClick={this.handleSubmit}>Next Step</SumbitButton>
      </React.Fragment>
    );
  }
}
export default StepTwo;
