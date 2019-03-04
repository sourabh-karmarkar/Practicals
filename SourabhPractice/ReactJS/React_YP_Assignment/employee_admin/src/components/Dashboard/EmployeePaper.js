import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddEmployee from './AddEmployee';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function EmployeePaper(props) {
  const { classes } = props;

return (
    <Grid container item md={9} style={{flex:"auto",display:"inline-flex",width:"100%",flexDirection:"row"}}>
      {props.employeeAddFlag && 
        <AddEmployee/>
      }
    </Grid>
  );
}

EmployeePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeePaper);