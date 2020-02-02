//TODO - amir later make country - province - city selector as a distinc component
import React, { Component } from "react";
import styled from "styled-components";
import { MainColors } from "../theme.jsx";
import Select from "react-select";
import Provinces from "./provinces.json";
import { Field } from "./styledComponents";

const StyledSelect = styled(Select)`
  div {
    border-color: ${MainColors.mainGray};
  }
`;
export default class ProvinceSelect extends React.Component {
  constructor(props) {
    super(props);
    // TODO-amir remove these lines and fetch from server
    const provinces = Provinces.map((val, idx) => {
      return {
        value: val.name,
        label: val.name
      };
    });
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.state = {
      provinces: provinces,
      cities: [],
      selectedProvince: null,
      selectedCity: null
    };
  }

  //TODO - amir  helper to find citie of prov? replace with server
  findCitiesByProvince(val) {
    console.log(val);
    return prov => prov.name == val;
  }

  handleChangeProvince(_selectedProvince) {
    const _cities = Provinces.find(
      this.findCitiesByProvince(_selectedProvince.value)
    ).Cities;
    const _citiesList = _cities.map((val, idx) => {
      return {
        value: val.name,
        label: val.name
      };
    });
    this.setState({
      ...this.state,
      selectedProvince: _selectedProvince,
      cities: _citiesList
    });
  }

  handleChangeCity(_selectedCity) {
    this.setState({ ...this.state, selectedCity: _selectedCity });
  }

  render() {
    return (
      <React.Fragment>
        <Field>
          <div className="labelWrapper">
            <label className="label" for="province">
              استان:{" "}
            </label>
          </div>
          <div className="inputWrapper">
            <StyledSelect
              name="province"
              value={this.state.selectedProvince}
              onChange={this.handleChangeProvince}
              options={this.state.provinces}
            />
          </div>
        </Field>
        <Field>
          <div className="labelWrapper">
            <label className="label" for="city">
              شهر:{" "}
            </label>
          </div>
          <div className="inputWrapper">
            <StyledSelect
              name="city"
              value={this.state.selectedCity}
              onChange={this.handleChangeCity}
              options={this.state.cities}
            />
          </div>
        </Field>
      </React.Fragment>
    );
  }
}
