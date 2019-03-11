import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class PaymentSection extends React.Component {

  render () {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Billing
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                required={true}
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
                required={true}
                hintText="Enter State"
                floatingLabelText="State/Province/Region"
                onChange={handleChange('state')}
                label="State"
                defaultValue={values.state}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required={true}
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
                required={true}
                hintText="Enter Country Code"
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
            <Grid item xs={12} md={12}>
              <Typography variant="h6" gutterBottom>
                Payment method
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required={true}
                id="name"
                label="Name on card"
                onChange={handleChange('name')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required={true}
                id="cardNumber"
                label="Card number"
                onChange={handleChange('cardNumber')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required={true}
                id="expDate"
                label="Expiry date"
                onChange={handleChange('expDate')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required={true}
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default PaymentSection;