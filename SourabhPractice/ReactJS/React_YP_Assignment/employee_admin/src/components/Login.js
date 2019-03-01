import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 20,
    margin: theme.spacing.unit * 10,
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height : "70%"
  },
  button: {
    margin: theme.spacing.unit * 4
  },
  grow: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  typo : {
    margin: 12
  }
});

export class Login extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      email: "",
      password: ""
    };
    this.state = this.initialState;
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    if (this.props.loginRequested) {
      return <div>loading</div>;
    }
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.typo} variant="h5" component="h3">
          <center><b>Login</b></center>
        </Typography>
        <Divider/>
        <TextField
          required
          id="email1"
          label="Email"
          placeholder="Enter Email"
          className={classes.textField}
          onChange={this.handleChange}
          name="email"
          margin="normal" />
        <TextField
          required
          id="password1"
          label="Password"
          className={classes.textField}
          onChange={this.handleChange}
          type="password"
          name="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={() => { this.props.login(this.state) }} className={classes.button}>
          Login
        </Button>
      </Paper>
    );
  }
}
export default connect()(withStyles(styles)(Login));
