import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import Code from "src/assets/svg/code.svg";
import Design from "src/assets/svg/design.svg";
import Arrow from "src/assets/svg/selectArrow.svg";

const SelectWrapper = styled.div`
  width: 100%;
  border: 0.063em solid ${MainColors.gray400};
  border-radius: 0.25em;
  font-size: 1rem;
  color: ${MainColors.gray400};
  float: left;
  height: 3rem;
`;
const Placeholder = styled.div`
  width: 90%;
  color: ${MainColors.gray400};
  height: 3rem;
  padding: 0.75rem;
  cursor: pointer;
  float: left;
`;
const Text = styled.input`
  width: 90%;
  color: ${MainColors.gray800};
  height: 3rem;
  padding: 0.75rem;
  cursor: pointer;
  float: left;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 300;
`;
const SelectArrow = styled.div`
  width: 10%;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 4rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;
const StyledReactSVG = styled(ReactSVG)`
  path {
    fill: ${MainColors.gray800};
  }
`;
const OptionWrapper = styled.div`
  background-color: white;
  border-radius: 0.5em;
  padding: 1.5rem 0;
  width: 100%;
  box-shadow: 0em 0.063em 0.25em 0em rgba(0, 0, 0, 0.2),
    0em 0em 0.063em -0.062em rgba(0, 0, 0, 0.12),
    0em 0em 0.063em 0em rgba(0, 0, 0, 0.14);
  position: relative;
  clear: both;
`;
const Option = styled.div`
  color: ${MainColors.gray800};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  &:hover {
    background: ${MainColors.gray200};
  }
`;
const SpecialOption = styled.div`
  color: ${MainColors.gray800};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${MainColors.gray200};
  }

  .text {
    float: left;
  }
  .title {
    font-size: 1rem;
    color: ${MainColors.brandPrimary};
  }
  .subTitle {
    font-size: 0.625rem;
    color: ${MainColors.gray400};
  }
`;
function Developer(props) {
  return (
    <SpecialOption onMouseOver={props.onMouseOver} onClick={props.onClick}>
      <ReactSVG
        src={Code}
        svgStyle={{
          width: "2rem",
          height: "2rem",
          float: "left",
          marginRight: "1rem"
        }}
      />
      <div className="Text">
        <div className="title">Developer</div>
        <div className="subTitle">
          Front-end , Back-end, Mobile, Full Stack, Machine Learning, QA, etc.
        </div>
      </div>
    </SpecialOption>
  );
}

function Designer(props) {
  return (
    <SpecialOption onMouseOver={props.onMouseOver} onClick={props.onClick}>
      <ReactSVG
        src={Design}
        svgStyle={{
          width: "2rem",
          height: "2rem",
          float: "left",
          marginRight: "1rem"
        }}
      />
      <div className="Text">
        <div className="title">Designer</div>
        <div className="subTitle">
          Graphic Design, UI Design, UX Design, etc
        </div>
      </div>
    </SpecialOption>
  );
}

class Select extends Component {
  constructor(props) {
    super(props);
    this.placeHolder = "Please select";

    this.state = {
      value: this.placeHolder,
      isActive: false,
      prevValue: this.placeHolder
    };
    const numbers = [1, 2, 3, 4, 5];
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.isActiveHandler = this.isActiveHandler.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.deActiveHandler = this.deActiveHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.deActiveHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.deActiveHandler);
  }
  onMouseOverHandler(val) {
    this.setState({
      value: val
    });
  }
  isActiveHandler() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      prevValue: this.state.value
    }));
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  deActiveHandler(event) {
    let prevValue = this.state.prevValue;

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isActive === true) {
        if (this.state.prevValue === this.placeHolder) {
          prevValue = this.placeHolder;
        }
        this.setState({
          isActive: false,
          value: prevValue
        });
      }
    }
  }
  render() {
    return (
      <SelectWrapper onClick={this.isActiveHandler} ref={this.setWrapperRef}>
        {this.state.value === this.placeHolder ? (
          <Placeholder>{this.state.value}</Placeholder>
        ) : (
          <Text ref={this.props.reference} value={this.state.value} disabled />
        )}
        <SelectArrow>
          <StyledReactSVG
            src={Arrow}
            svgStyle={{
              height: "1.75rem",
              width: "1.75em"
            }}
          />
        </SelectArrow>
        {this.state.isActive === true ? (
          this.props.optionType === "sOption" ? (
            <OptionWrapper>
              <Developer
                onMouseOver={() => {
                  this.onMouseOverHandler("Developer");
                }}
                onClick={this.props.onClick}
              />
              <Designer
                onMouseOver={() => {
                  this.onMouseOverHandler("Designer");
                }}
                onClick={this.props.onClick}
              />
            </OptionWrapper>
          ) : (
            <OptionWrapper>
              {this.props.options.map(option => (
                <Option
                  onMouseOver={() => {
                    this.onMouseOverHandler(option);
                  }}
                  key={option}
                >
                  {option}
                </Option>
              ))}
            </OptionWrapper>
          )
        ) : (
          <span />
        )}
      </SelectWrapper>
    );
  }
}
export default Select;
