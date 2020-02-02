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
import MultiSelect from "../forms/multiSelect.jsx";
import Error from "../forms/error.jsx";
import ProvinceSelect from "./provinceSelector.jsx";
import ProgressBar from "../forms/progressbar";
import SkypeIcon from "src/assets/svg/skype.svg";

const El1 = styled.div`
  position: relative;
  top: 3rem;
  left: 2%;
  height: 0.875rem;
  width: 0.875rem;
  border-radius: 0.313rem;
  background: #00c8e0;
`;
const El2 = styled.div`
  position: relative;
  top: 0;
  left: 10%;
  height: 0.375rem;
  width: 0.375rem;
  border-radius: 0.188rem;
  background: #00c8e0;
`;
const El3 = styled.div`
  position: relative;
  top: 5rem;
  left: 15%;
  height: 1.188rem;
  width: 1.188rem;
  border-radius: 0.313rem;
  background: #00c8e0;
`;
const El4 = styled.div`
  position: relative;
  top: 1rem;
  left: 19%;
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 0.313rem;
  background: #00c8e0;
`;
const El5 = styled.div`
  position: relative;
  top: 4.5rem;
  left: 27%;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 0.25rem;
  background: #00c8e0;
`;
const El6 = styled.div`
  position: relative;
  top: 4.5rem;
  left: 65%;
  height: 1.063rem;
  width: 1.063rem;
  border-radius: 0.313rem;
  background: #00c8e0;
`;
const El7 = styled.div`
  position: relative;
  top: 1rem;
  left: 75%;
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 0.313rem;
  background: #00c8e0;
`;
const El8 = styled.div`
  position: relative;
  top: 4rem;
  left: 85%;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 0.25rem;
  background: #00c8e0;
`;
const El9 = styled.div`
  position: relative;
  top: 3rem;
  left: 90%;
  height: 0.375rem;
  width: 0.375rem;
  border-radius: 0.188rem;
  background: #00c8e0;
`;
const TitleWrapper = styled(Row)`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) and (max-width: 959px) {
  }
  @media only screen and (min-width: 960px) {
    padding: 6rem 0 3rem 0;
  }
`;
const StyledTitleColumn = styled(Column)`
  z-index: 1;
`;
const Title = styled.div`
  width: 31.6rem;
  margin: auto;
  color: ${MainColors.brandPrimary};
  font-size: 2.5rem;
  text-align: left;
`;

const ContentWrapper = styled(Row)`
  margin-bottom: 6rem;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) and (max-width: 959px) {
  }
  @media only screen and (min-width: 960px) {
  }
`;
const Content = styled.div`
  width: 31.6rem;
  margin: auto;
`;

class ApplyToWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      completedStep: 0,
      isWorkerTypeSelected: false,
      workerType: "init",
      firstName: "init",
      lastName: "init",
      province: "init",
      town: "init",
      email: "init",
      phone: "init",
      skypeId: "init",
      skill: [],
      yearsOfExperience: "init"
    };
    this.handleSubmitStepOne = this.handleSubmitStepOne.bind(this);
    this.handleShowForms = this.handleShowForms.bind(this);

    this.workerType = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    // province = React.createRef();
    // town = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.skypeId = React.createRef();
    this.skills = React.createRef();
  }

  handleShowForms() {
    this.setState({
      isWorkerTypeSelected: true
    });
  }
  handleSubmitStepOne() {
    this.setState(
      {
        workerType: this.workerType.current.value,
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        // province: this.province.current.value,
        // town: this.town.current.value,
        email: this.email.current.value,
        phone: this.phone.current.value,
        skypeId: this.skypeId.current.value
      },
      () => {
        this.state.firstName != "" &&
          this.state.lastName != "" &&
          this.state.email != "" &&
          this.state.phone != "" &&
          this.state.skypeId != "" &&
          this.state.firstName != "init" &&
          this.state.lastName != "init" &&
          this.state.email != "init" &&
          this.state.phone != "init" &&
          this.state.skypeId != "init" &&
          this.setState({
            step: 2,
            completedStep: 1
          });
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        <TitleWrapper>
          <El1 />
          <El2 />
          <El3 />
          <El4 />
          <El5 />
          <El6 />
          <El7 />
          <El8 />
          <El9 />
          <StyledTitleColumn d="12">
            <Title>Apply to Join us!</Title>
          </StyledTitleColumn>
        </TitleWrapper>
        <ContentWrapper>
          <Column d="12">
            <Content>
              <ProgressBar
                numberOfSteps="2"
                completedStep={this.state.completedStep}
              />
              {this.state.step === 1 && (
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
                          <Status
                            className={this.state.firstName === "" && "error"}
                          />
                          <Input ref={this.firstName} />
                          {this.state.firstName === "" && (
                            <Error>This field cannot be empty</Error>
                          )}
                        </Field>
                        <Field>
                          <FieldTitle>Last name</FieldTitle>
                          <Status
                            className={this.state.lastName === "" && "error"}
                          />
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
                          <Status
                            className={this.state.email === "" && "error"}
                          />
                          <Input ref={this.email} />
                          {this.state.email === "" && (
                            <Error>This field cannot be empty</Error>
                          )}
                        </Field>
                        <Field>
                          <FieldTitle>Phone Number</FieldTitle>
                          <Status
                            className={this.state.phone === "" && "error"}
                          />
                          <Input
                            ref={this.phone}
                            placeholder="Example: +989123456789"
                          />
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
                          <Status
                            className={this.state.skypeId === "" && "error"}
                          />
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
              )}
              {this.state.step === 2 && (
                <React.Fragment>
                  <Form title="Skills">
                    <Field>
                      <FieldTitle>What are your professions?</FieldTitle>
                      <Status
                        className={this.state.firstName === "" && "error"}
                      />
                      <MultiSelect
                        optionType="option"
                        onClick={this.handleAddSkill}
                        reference={this.skills}
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
                      <Status
                        className={
                          this.state.yearsOfExperience === "" && "error"
                        }
                      />
                      <Input ref={this.yearsOfExperience} type="number" />
                      {this.state.yearsOfExperience === "" && (
                        <Error>This field cannot be empty</Error>
                      )}
                    </Field>
                  </Form>
                </React.Fragment>
              )}
            </Content>
          </Column>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}
export default ApplyToWork;
