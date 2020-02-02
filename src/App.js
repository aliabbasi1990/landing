import React, { Component } from 'react';

import './styles/global.scss'
import Layout from "src/views/Layout"
import PropsRoute from "./consts/propsRoute"
// import Header from './views/components/header/header';
// import Footer from './views/components/footer/footer';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import {GlobalStyle} from "src/views/components/theme.jsx";

class App extends Component {
	render() {
		return (
        <React.Fragment>
          <GlobalStyle />
          <div className="App">
            <Helmet
              titleTemplate="%s - Extop Boilerplate"
              defaultTitle="Extopo Boilerplate"
            >
              <meta name="description" content="Extop Work with the world" />
            </Helmet>
            {/* <Header /> */}
            <Switch>
              {/* <PropsRoute path="/login" component={Login}/> */}
              {/* <Route path="" component={NotFoundPage} /> */}
              <Layout/>
            </Switch>
          </div>
        </React.Fragment>
		)
	}
}

export default App
