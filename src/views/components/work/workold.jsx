import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import ReactSVG from 'react-svg';
import {Row, Column, MainColors, ButtonPrimary, ButtonWarning, Button, H1, H2, H3} from "../theme.jsx";
// import DatePicker from 'react-date-picker';
import {DatePicker} from "react-advance-jalaali-datepicker";
import {Field} from './styledComponents';
import ProvinceSelect from './provinceSelector.jsx';
// import { Calendar, DatePicker } from 'react-persian-datepicker';

const Wrapper = styled.div`
    color: ${props => props.theme.mainGray};
    width: 50%;
    border: 1px solid;
    border-radius: 10px;    
    margin: 3rem auto;
    font-family: system-ui;
`;
const Title = styled.div`
    background-color: ${props => props.theme.mainGray};
    color: ${props => props.theme.mainYellow};
    padding: 1rem;
    border-radius: 8px 8px 0 0 ;
    width: 100%;
    text-align: center;
`;

class PersonalInfo extends Component {
    change(unix, formatted){
        console.log(unix) // returns timestamp of the selected value, for example.
        console.log(formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    DatePickerInput(props) {
        return <input className="popo" {...props} ></input>;
    }

    render() {
        return (
           <React.Fragment>
                <Title theme={MainColors}>اطلاعات شخصی</Title>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="fullName">نام و نام خانوادگی: </label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="fullName" type="text" placeholder="فارسی" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="dateOfBirth">تاریخ تولد: </label>           
                    </div>
                    <div className="inputWrapper">
                        <DatePicker
                        containerClass="input"
                        inputComponent={this.DatePickerInput}
                        placeholder="انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        onChange={this.change}
                        id="datePicker"
                        />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="phoneNumber">شماره تماس:</label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="phoneNumber" type="text" placeholder="موبایل" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="email">ایمیل: </label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="email" type="email" placeholder="" />
                    </div>
                </Field>
                <ProvinceSelect/>
            </React.Fragment>
        )
    }
}

class BusinessInfo extends Component {
    render() {
        return (
           <React.Fragment>
                <Title theme={MainColors}>اطلاعات کاری</Title>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="experties">تخصص: </label>            
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="experties" type="text" placeholder="... ,html, photopshop" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="yearOfExperience">میزان تجربه: </label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="yearOfExperience" type="number" placeholder="سال" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="language">زبان های گفتار: </label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="language" type="text" placeholder="فارسی، انگلیسی" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="salary">حقوق پیشنهادی:</label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="salary" type="number" placeholder="تومان" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="description">توضیحات: </label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="description" type="text" placeholder="فارسی" />
                    </div>
                </Field>
                <Field>
                    <div className="labelWrapper">
                        <label className="label" for="CV">فایل رزومه: (PDF)</label>           
                    </div>
                    <div className="inputWrapper">
                        <input className="input" id="CV" type="file"/>
                    </div>
                </Field>
            </React.Fragment>
        )
    }
}

class Step3 extends Component {
    static defaultProps = {
        email:"",
        gender: ""
    }
    constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      gender: props.gender
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.getStore().email != userInput.email || this.props.getStore().gender != userInput.gender) { // only update store of something changed
          this.props.updateStore({
            ...userInput,
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }

        isDataValid = true;
    }
    else {
        // if anything fails then update the UI validation state but NOT the UI Data State
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand)
      return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
  }

   _validateData(data) {
    return  {
      genderVal: (data.gender != 0), // required: anything besides N/A
      emailVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(data.email), // required: regex w3c uses in html5
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      genderValMsg: val.genderVal ? '' : 'A gender selection is required',
      emailValMsg: val.emailVal ? '' : 'A valid email is required'
    }
    return errMsgs;
  }

  _grabUserInput() {
    return {
      gender: this.refs.gender.value,
      email: this.refs.email.value
    };
  }

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    if (typeof this.state.genderVal == 'undefined' || this.state.genderVal) {
      notValidClasses.genderCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.genderCls = 'has-error col-md-8';
       notValidClasses.genderValGrpCls = 'val-err-tooltip';
    }

    if (typeof this.state.emailVal == 'undefined' || this.state.emailVal) {
        notValidClasses.emailCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.emailCls = 'has-error col-md-8';
       notValidClasses.emailValGrpCls = 'val-err-tooltip';
    }

    return (
      <div className="step step3">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>Step 3: Basic JavaScript Validation Example</h1>
              </label>
            </div>
            <div className="row content">
              <div className="col-md-12">
                This example component has a form that uses local standard basic JavaScript validation.
              </div>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Gender
                </label>
                <div className={notValidClasses.genderCls}>
                  <select
                    ref="gender"
                    autoComplete="off"
                    className="form-control"
                    required
                    defaultValue={this.state.gender}
                    onBlur={this.validationCheck}>
                      <option value="">Please select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                  </select>
                  <div className={notValidClasses.genderValGrpCls}>{this.state.genderValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Email
                </label>
                <div className={notValidClasses.emailCls}>
                  <input
                    ref="email"
                    autoComplete="off"
                    type="email"
                    placeholder="john.smith@example.com"
                    className="form-control"
                    required
                    defaultValue={this.state.email}
                    onBlur={this.validationCheck} />
                  <div className={notValidClasses.emailValGrpCls}>{this.state.emailValMsg}</div>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
export {
    PersonalInfo,
    BusinessInfo,
    Wrapper,
    Step3
};