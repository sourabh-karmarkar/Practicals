import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Login from './components/Login';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import login from "./actions/loginAction";
import addemployee from "./actions/addEmployeeAction";
import AppBarAdmin from './components/Dashboard/AppBarAdmin';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            backgroundColor: "#9FF9F5"
          }}>
          <Route path="/dashboard/" render={props => <AppBarAdmin {...props} {...this.props}/>} />
          <Route path="/login" render={props => <Login {...props} {...this.props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  loginRequested:state.loginRequested,
  employeeAddFlag:state.employeeAddFlag
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  addemployee : employee => dispatch(addemployee(employee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
