import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class FormUserDetails extends React.Component {

  render () {
    const { values, handleChange } = this.props;
    console.log(this.props)
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Afterpay"/>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                hintText="Enter Your First Name"
                floatingLabelText="First Name"
                onChange={handleChange('givenNames')}
                defaultValue={values.givenNames}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange('surname')}
                defaultValue={values.surname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                hintText="Example: 2120000000"
                floatingLabelText="Phone Number"
                onChange={handleChange('phoneNumber')}
                defaultValue={values.phoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                hintText="Enter Your Email Address"
                floatingLabelText="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;