import React, {Component} from "react"
import Home from "./pages/Home.jsx"
import Work from "./pages/Work.jsx"
import PrivateRoute from "../consts/privateRoute"
import {Switch} from "react-router-dom"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {layout: true}
  }

  render() {
    return (
      <Switch>
        <PrivateRoute exact={true} path="/" component={Home}/>
        <PrivateRoute exact={true} path="/Work" component={Work}/>
      </Switch>
    )
  }
}

export default Layout