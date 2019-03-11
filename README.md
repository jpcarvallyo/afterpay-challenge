## Welcome
This is my submission to the afterpay coding challenge. Below were my requirements.

"Your manager tells you we need to prototype a new checkout flow for an internal project. Create a single-page application that will capture user information and send it back to an API endpoint.
Step one: Prompt our user to input their address information. The user should then be able to 'Continue' to save the provided information and move to the next prompt."

Step two: Prompt the user to provide a payment method. The user should be able to 'Complete' their order at this point and send the collected data to a mock API endpoint.

Assumptions and Requirements
  Use any mock items to simulate the items and consumer details
  Use any design as fit
  Use any api-endpoint (for example: https://docs.afterpay.com/us-online-api-v1.html#create-order) to mimic the order submission, this challenge focus on Front-End so as long as the order is sent out

* Note: I ran into a CORS issue when sending the data to the API endpoint via POST request. I followed this documentation (https://docs.afterpay.com/us-online-api-v1.html#afterpay-online-us-api-v1) and modeled the data to be in line with the documentation. 

As this challenged focused on the front end and sending off the data. I figured this would be something that the backend would attempt to resolve.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
