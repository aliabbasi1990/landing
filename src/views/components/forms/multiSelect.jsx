import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Row, Column, MainColors } from "../theme.jsx";
import ReactSVG from "react-svg";
import Arrow from "src/assets/svg/selectArrow.svg";
import Close from "src/assets/svg/close.svg";

const SelectWrapper = styled.div`
  width: 100%;
  border: 0.063em solid ${MainColors.gray400};
  border-radius: 0.25em;
  font-size: 1rem;
  color: ${MainColors.gray400};
  float: left;
  min-height: 3rem;
`;
const Placeholder = styled.div`
  width: 90%;
  color: ${MainColors.gray400};
  padding: 0.75rem;
  cursor: pointer;
  float: left;
  height: 100%;
`;
const Text = styled.div`
  width: 90%;
  color: ${MainColors.gray800};
  min-height: 3rem;
  padding: 0.75rem;
  cursor: pointer;
  float: left;
`;
const SelectArrow = styled.div`
  width: 10%;
  height: 100%;
  float: left;
  text-align: center;
  position: relative;
  top: 0.5rem;
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
  padding: 0.5rem 0;
  width: 100%;
  box-shadow: 0em 0.063em 0.25em 0em rgba(0, 0, 0, 0.2),
    0em 0em 0.063em -0.062em rgba(0, 0, 0, 0.12),
    0em 0em 0.063em 0em rgba(0, 0, 0, 0.14);

  clear: both;
  height: 150px;
  overflow: scroll;
`;
const Option = styled.div`
  color: ${MainColors.gray800};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  &:hover {
    background: ${MainColors.gray200};
  }
`;

const EachSelectWrapper = styled.div`
  background-color: rgba(0, 78, 133, 0.38);
  border-radius: 0.25rem;
  color: white;
  float: left;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin: 0.2rem;
  cursor: default;
`;
const CloseIconWrapper = styled.span`
  width: 1rem;
  height: 1rem;
  float: right;
  margin: 0.1rem 0 0 0.3rem;
  cursor: pointer;
`;
const CloseIcon = styled(ReactSVG)`
  path {
    fill: white;
  }
`;

function EachSelect(props) {
  return (
    <EachSelectWrapper onClick={props.onClick}>
      {props.value}
      <CloseIconWrapper>
        <CloseIcon
          src={Close}
          svgStyle={{
            height: "100%",
            width: "100%"
          }}
        />
      </CloseIconWrapper>
    </EachSelectWrapper>
  );
}

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.placeHolder = "Please Choose";

    this.state = {
      value: "Please Choose",
      isActive: false,
      prevValue: this.placeHolder,
      skills: []
    };
    const numbers = [1, 2, 3, 4, 5];
    this.onClickHandler = this.onClickHandler.bind(this);
    this.isActiveHandler = this.isActiveHandler.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.deActiveHandler = this.deActiveHandler.bind(this);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.deActiveHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.deActiveHandler);
  }
  onClickHandler(val) {
    let tempSkills = [...this.state.skills, val];
    this.setState({
      skills: Array.from(new Set(tempSkills)),
      value: "Choosed"
    });
  }
  handleDeleteSkill(skill) {
    var skills = [...this.state.skills];
    var index = skills.indexOf(skill);
    if (index !== -1) {
      skills.splice(index, 1);
      this.setState({ skills: skills }, () => {
        if (!this.state.skills.length) {
          this.setState({ value: "Please Choose" });
        }
      });
    }
  }
  isActiveHandler() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      prevValue: this.state.value
    }));
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
          value: "Please Choose"
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
          <Text>
            <input
              type="hidden"
              ref={this.props.reference}
              value={this.state.skills}
            />
            {this.state.skills.map(skill => (
              <EachSelect
                value={skill}
                key={skill}
                onClick={() => this.handleDeleteSkill(skill)}
              />
            ))}
          </Text>
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
          <OptionWrapper>
            {this.props.options.map(option => (
              <Option
                onClick={() => {
                  this.onClickHandler(option);
                }}
                key={option}
              >
                {option}
              </Option>
            ))}
          </OptionWrapper>
        ) : (
          <span />
        )}
      </SelectWrapper>
    );
  }
}
export default MultiSelect;
