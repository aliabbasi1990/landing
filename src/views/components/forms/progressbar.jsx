import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import Tick from "src/assets/svg/tick.svg";

const ProgressBarWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  float: left;
  position: relative;
`;
const ProgressLine = styled.div`
  width: 100%;
  border-bottom: 0.063rem solid ${MainColors.brandPrimary};
  position: absolute;
  top: 0.4rem;
`;
const StepWrapper = styled.div`
  height: 0.75rem;
  width: 3rem;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const StepShape = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  background-color: white;
  border: 1px solid ${MainColors.brandPrimary};
  border-radius: 0.75rem;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const CompletedStepShape = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: ${MainColors.brandPrimary};
  border-radius: 0.75rem;
  position: absolute;
  top: -1px;
  z-index: 1;
`;

const StyledReactSVG = styled(ReactSVG)`
  path {
    fill: white;
  }
`;
const StepName = styled.div`
  color: ${MainColors.brandPrimary};
  font-size: 0.875rem;
`;
function Step(props) {
  let left = props.left;
  left === 0 ? (left = 2) : (left = props.left);
  const style = {
    left: left - 2 + "%"
  };
  let StepNameLeft = props.left;
  StepNameLeft === 100
    ? (StepNameLeft = -1.75)
    : StepNameLeft === 0
    ? (StepNameLeft = 0)
    : (StepNameLeft = -0.75);
  const StepNameStyle = {
    position: "relative",
    left: StepNameLeft + "rem"
  };
  return props.status === "completed" ? (
    <StepWrapper style={style}>
      <CompletedStepShape>
        <StyledReactSVG
          src={Tick}
          svgStyle={{
            width: "90%",
            height: "90%",
            float: "left",
            margin: "5%"
          }}
        />
      </CompletedStepShape>
      <br />
      <StepName style={StepNameStyle}>Step {props.stepNumber}</StepName>
    </StepWrapper>
  ) : (
    <StepWrapper style={style}>
      <StepShape />
      <br />
      <StepName style={StepNameStyle}>Step {props.stepNumber}</StepName>
    </StepWrapper>
  );
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 100 / (this.props.numberOfSteps - 1)
    };
  }
  generateSteps() {
    let steps = [];
    for (let i = 0; i < this.props.numberOfSteps; i++) {
      this.props.completedStep > i
        ? steps.push(
            <Step
              status="completed"
              left={i * this.state.distance}
              key={i}
              stepNumber={i + 1}
            />
          )
        : steps.push(
            <Step left={i * this.state.distance} key={i} stepNumber={i + 1} />
          );
    }
    return steps;
  }

  render() {
    return (
      <ProgressBarWrapper>
        {this.generateSteps()}
        <ProgressLine />
      </ProgressBarWrapper>
    );
  }
}
export default ProgressBar;
