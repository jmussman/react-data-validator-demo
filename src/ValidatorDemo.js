// ValidatorDemo.js
// Copyright © 2018 Joel Mussman. All rights reserved.
//
// This class is a parent which demonstrates how to use the Validator class from react-data-validator.
//

import React, { Component } from 'react'
import Validator from 'react-data-validator'

import logo from './logo.png'
import './ValidatorDemo.css'

class ValidatorDemo extends Component {

    constructor(props) {

        super(props)

        this.valid = true

        this.state = {

            name: '',
            password: '', 
            valid: true
        }

        this.alert = this.alert.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.setInvalid = this.setInvalid.bind(this)
    }

    componentDidMount() {

        if (this.valid !== this.state.valid) {

            this.setState({ valid: this.valid })
        }
    }

    componentDidUpdate() {

        if (this.valid !== this.state.valid) {

            this.setState({ valid: this.valid })
        }
    }

    render() {

        this.valid = true

        let output = (
            <div>

                <img src={logo} alt="logo" />
                
                <h1>Data Validation Demonstration</h1>

                <Validator className="validation"
                    value={ this.state.name }
                    isRequired={ true }
                    renderOnEmpty={ true }>
                    The name field is required
                </Validator><br />

                <Validator className="validation"
                    value={ this.state.password }
                    isRequired={ true }
                    renderOnEmpty={ true }
                    constraint={ /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ }>
                    The password must be a minimum of eight characters with an uppercase
                    letter, lowercase letter, and a digit
                </Validator><br />

                <form onSubmit={ this.onSubmit } >

                    <label>Name:</label>
                        <input type="text" required={ true } value={ this.state.name }
                            onChange={ (event) => this.setState( { name: event.target.value } ) } />

                    <Validator className="validation"
                        value={ this.state.name }
                        isRequired={ true }
                        notify={ this.setInvalid }
                        renderOnEmpty={ true }>
                        Required
                    </Validator><br />

                    <label>New Password:</label>
                        <input type="password"
                            onChange={ (event) => this.setState( { password: event.target.value } ) } />

                    <Validator className="validation"
                        value={ this.state.password }
                        isRequired={ true }
                        renderOnEmpty={ true }
                        constraint={ /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ }
                        notify={ this.setInvalid }>
                        Password is not valid
                    </Validator><br />

                    <label></label>

                    <input type="button" value="Post" disabled={ !this.state.valid } onClick={ this.alert } />&nbsp;
                    <input type="submit" value="Submit" onClick={ this.alert } />
                </form>
            </div>
        )

        return output;
    }

    alert() {

        window.alert('Button clicked')
    }

    onSubmit(event) {

        event.preventDefault()
    }

    setInvalid() {

        this.valid = false
    }
}

export default ValidatorDemo