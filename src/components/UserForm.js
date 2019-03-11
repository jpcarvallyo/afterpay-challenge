import React from 'react';
import FormUserDetails from './FormUserDetails';
import PaymentSection from './PaymentSection';
import ShippingSection from './ShippingSection';
import Success from './Success';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class UserForm extends React.Component {
  state = {
    step: 1,
    items: [
      {
        name: "T-Shirt",
        sku: "12341234",
        quantity: 1,
        price: {
          amount: "10.00",
          currency: 'USD'
        }
      },
      {
        name: "Jeans",
        sku: "12341235",
        quantity: 1,
        price: {
          amount: "20.00",
          currency: 'USD'
        }
      }
    ],
    amount: 34.06,
    currency: 'USD',
    phoneNumber: '',
    givenNames: '',
    surname: '',
    email: '',
    name: '',
    line1: '',
    state: '',
    postcode: '',
    countryCode: 'US',
    cardName: '',
    cardNumber: '',
    expDate: '',
    token: '',
    merchantReference: ''
  };

  stepThroughContent = (step, values) => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PaymentSection
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ShippingSection
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Success/>
        )
    }

  };

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  };

  handlePayment = async (e) => {
    e.preventDefault();
    const { items, amount, currency, phoneNumber, givenNames, surname, email, name, line1, state, postcode, countryCode } = this.state;
    const values = {
      totalAmount: {
        amount,
        currency
      },
      consumer: {
        phoneNumber,
        givenNames,
        surname,
        email
      },
      billing: {
        name,
        line1,
        state,
        postcode,
        countryCode,
        phoneNumber
      },
      shipping: {
        name,
        line1,
        state,
        postcode,
        countryCode,
        phoneNumber
      },
      items: items,
      merchant: {
        redirectConfirmUrl: "https://www.merchant.com/confirm",
        redirectCancelUrl: "https://www.merchant.com/cancel"
      },
      merchantReference: "merchantOrder-1234",
      taxAmount: {
        amount: "0.00",
        currency: "USD"
      },
      shippingAmount: {
        amount: "10.00",
        currency
      }
    };

    const orderRequest = new Request('https://api.us-sandbox.afterpay.com/v1/orders', {
      headers: new Headers({
        'Authorization': 'Basic MzI6YWJjZGVmZ2g=',
        'Content-Type': 'application/json',
        'User-Agent': 'Merchant/123456',
        'Accept': 'application/json'
      })
    });

    const paymentRequest = new Request('https://api.us-sandbox.afterpay.com/v1/payments/capture', {
      headers: new Headers({
        'Authorization': 'Basic MzI6YWJjZGVmZ2g=',
        'Content-Type': 'application/json',
        'User-Agent': 'Merchant/123456',
        'Accept': 'application/json'
      })
    });

    // Send Order Request
    try {
      await fetch(orderRequest, {
        method: 'post',
        body: JSON.stringify(values)
      }).then(response => {
        const responseJSON = response.json();
        const {token, merchantReference} = responseJSON;
        this.setState({token: token, merchantReference: merchantReference});
      });
    } catch (error) {
      // alert(`Our apologies, the data has errors, we'll try to request it one more time. ${error.message}`);
      document.getElementById('mainContainer').innerHTML = `Our apologies, the data has errors, we'll try to request it one more time.`
    }

    // Capture Payment
    try {
      await fetch(paymentRequest, {
        method: 'post',
        body: JSON.stringify({token: this.state.token, merchantReference: this.state.merchantReference})
      }).then(response => {
        return response.json()
      }).then(data => {

      })
    } catch (error) {
      alert(`Our apologies, the data has errors, we'll try to request it one more time. ${error.message}`);

    }
  };

  render () {
    const { step } = this.state;
    const { amount, currency, phoneNumber, givenNames, surname, email, name, line1, state, postcode, countryCode } = this.state;
    const values = { amount, currency, phoneNumber, givenNames, surname, email, name, line1, state, postcode, countryCode };

    return (
      <MuiThemeProvider>
          <React.Fragment>
            {this.stepThroughContent(step, values)}
            <div style={{marginTop: '2em', display: 'flex', alignContent: 'flex-end'}}>
              {step !== 1 && (
                <RaisedButton
                  label="Back"
                  primary={true}
                  onClick={this.prevStep}
                  style={{marginRight: 20}}
                />
              )}
              {step !== 3 && (
                <RaisedButton
                  label="Continue"
                  primary={true}
                  onClick={this.nextStep}
                />
              )}
              {step === 3 && (
                <RaisedButton
                  label="Submit Payment"
                  primary={true}
                  onClick={this.handlePayment.bind(this)}
                />
              )}
            </div>
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UserForm;