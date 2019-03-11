import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"/>
          <h1>Thank You For Your Submission</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;