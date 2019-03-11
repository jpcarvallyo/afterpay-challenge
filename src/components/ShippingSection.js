import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class ShippingSection extends React.Component {

  render () {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div id="mainContainer">
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Shipping
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  required
                  hintText="Address Line 1"
                  floatingLabelText="Address Line 1"
                  onChange={handleChange('line1')}
                  label="Address Line 1"
                  defaultValue={values.line1}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  hintText="Enter State"
                  floatingLabelText="State/Province/Region"
                  onChange={handleChange('state')}
                  label="State"
                  defaultValue={values.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  hintText="Enter Zip / Postal code"
                  floatingLabelText="Zip / Postal Code"
                  onChange={handleChange('postcode')}
                  label="Postal Code"
                  defaultValue={values.postcode}
                  xs={12}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  hintText="Select Country Code"
                  floatingLabelText="Country Code"
                  onChange={handleChange('countryCode')}
                  label="Country Code"
                  defaultValue={values.countryCode}
                  xs={12}
                >
                  {/*{console.log(countries)}*/}
                  {/*{this.renderCountries()}*/}
                </TextField>
              </Grid>
            </Grid>
          </React.Fragment>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ShippingSection;