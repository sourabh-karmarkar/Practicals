import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    height:"100%",
    display:"block",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class SidePanelPaper extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
          <Grid style={{display:"block",width:"100%"}} item md={3} >
            <Paper style={{ height: '100%' }}>
            {/* <NavLink to="/AddEmployee"> */}
                <Button onClick={() => { this.props.addemployee() }} style={{marginTop:'10%',marginLeft:'22%'}} variant="contained" color="primary">
                    Add Employee
                </Button>
            {/* </NavLink> */}
            </Paper>
          </Grid>
    );
  }
}

SidePanelPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidePanelPaper);