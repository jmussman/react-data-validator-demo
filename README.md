[//]: # (README.md)
[//]: # (Copyright © 2018 Joel Mussman. All rights reserved.)

<p align="center"><img src="src/logo.png" /></p>

---

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The project impelements a component with a view, ValidatorDemo.js, that builds a form with two input fields.
The name and password fields allow user input, the values are valdiated using two sets of Validators.
There are two sets to demonstrate grouping Validators and placing them next to form fields.
As described by react-data-validator the Validators are configured with *notify* callbacks that set an instance variable.
After rendering takes place, the *componentDidMount* and *componentDidUpdate* event methods are used to see if
the valid state has changed, and update the compnent state to control the enabling of the "Post" button.

## Module Under Demonstration

[react-data-validator](https://github.com/jmussman/react-data-validator)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Contributing

We are always looking for ways to make the module better. But remember: Keep it simple. Keep it minimal. Don't add every single feature just because you can, and a feature when a feature is required.

## Authors or Acknowledgments

* Joel Mussman

## License

This project is licensed under the MIT License.