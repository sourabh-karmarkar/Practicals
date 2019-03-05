import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  paperaddholder:{
      width:"100%",
  },
  addemptypo:{
      margin:"2%",
  },
  button: {
    marginLeft: "35%",
    marginRight: "35%",
    marginTop: "3%",
    marginBottom: "3%"
  },
  grow: {
    flexGrow: 1
  },
  textField: {
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "4%",
    marginBottom: "4%",
    width: "auto"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: "",
      email: "",
      password: ""
    };
    this.state = this.initialState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.paperaddholder}>
            <Typography className={classes.addemptypo} variant="h5" component="h3">
            Add Employee
            </Typography>
            <Divider />
            <TextField
            id="fullname1"
            label="Full Name"
            placeholder="Enter Full Name"
            className={classes.textField}
            margin="normal"
            name="fullname"
            onChange={this.handleChange}
            fullWidth
            />
            <TextField
            id="email1"
            label="Email"
            placeholder="Enter Email"
            className={classes.textField}
            onChange={this.handleChange}
            name="email"
            margin="normal" />
            <TextField
            id="salary1"
            label="Salary"
            className={classes.textField}
            onChange={this.handleChange}
            name="salary"
            autoComplete="current-password"
            margin="normal"
            />
            <Button variant="contained" color="primary" onClick={() => { this.props.signup(this.state) }} className={classes.button}>
                Add Employee
            </Button>
        </Paper>
    );
  }
}
export default (withStyles(styles)(AddEmployee));