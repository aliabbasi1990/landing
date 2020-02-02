import React, { Component } from "react";
import { isNull } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Avenir";
    font-weight:100;
    src: url("/fonts/AvenirNext-UltraLight.woff") format('woff');
  }
  @font-face {
    font-family: "Avenir";
    font-weight:300;
    src: url("/fonts/AvenirNext-Regular.woff") format('woff');
  }
  @font-face {
    font-family: "Avenir";
    font-weight:500;
    src: url("/fonts/AvenirNext-Medium.woff") format('woff');
  }
  @font-face {
    font-family: "Avenir";
    font-weight:600;
    src: url("/fonts/AvenirNext-Bold.woff") format('woff');
  }
  @font-face {
    font-family: "Avenir";
    font-weight:800;
    src: url("/fonts/AvenirNext-Heavy.woff") format('woff');
  }
  body {
    font-family: "Avenir"; 
    font-weight: 300;
    background: #f7f8fb;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const MainColors = {
  brandPrimary: "#004e85",
  brandPrimaryLight: "#067EBB",
  brnadPrimaryBackground: "#004E85",
  brandPrimaryDark: "#191946",
  brandSecondary: "#00c8e0",
  brandSecondaryLight: "#7DDFEE",
  brnadSecondaryBackground: "#00AEC7",
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray600: "#757575",
  gray800: "#424242",
  errorPrimary: "#ef5350"
};
function getWidth(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-dirction: row;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;
const Column = styled.div`
  float: left;

  @media only screen and (max-width: 720px) {
    ${({ m }) => m && getWidth(m)};
  }
  @media only screen and (min-width: 720px) and (max-width: 960px) {
    ${({ t }) => t && getWidth(t)};
  }
  @media only screen and (min-width: 960px) {
    ${({ d }) => d && getWidth(d)};
  }
`;
const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
`;
const H2 = styled.h2`
  font-size: 2rem;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
`;
const P = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.color};
`;
const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 300;
  line-height: 1.75rem;
  font-family: "Avenir";
  border-radius: 0.25rem;

  &.small {
    font-size: 0.875rem;
    padding: 0.375rem 1rem;
  }
  &.medium {
    font-size: 1rem;
    padding: 0.8125rem 1.25rem;
  }
  &.large {
    font-size: 1.125rem;
    padding: 1rem 1.25rem;
  }
  &.primaryFilled {
    background-color: ${MainColors.brandPrimary};
    border: 2px solid ${MainColors.brandPrimary};
    color: white;
  }
  &.secondaryFilled {
    background-color: ${MainColors.brandSecondary};
    border: 2px solid ${MainColors.brandSecondary};
    color: white;
  }
  &.primaryOutline {
    background: none;
    border: 2px solid;
    color: ${MainColors.brandPrimary};
  }
  &.secondaryOutline {
    background: none;
    border: 2px solid;
    color: ${MainColors.brandSecondary};
  }
  &.outline {
    background: none;
    border: 2px solid white;
    color: white;
  }
`;

export { GlobalStyle, Row, Column, MainColors, Button, H1, H2, H3, P };
