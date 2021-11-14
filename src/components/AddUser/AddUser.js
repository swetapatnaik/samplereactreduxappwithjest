import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import './AddUser.css'

class AddUser extends Component {
    state = {

    }

    render() {
        const { pristine, submitting, handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field
                        component="input"
                        type="text"
                        id="first-name"
                        name="firstName"
                        maxLength="15"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field
                        component="input"
                        type="text"
                        id="last-name"
                        name="lastName"
                        maxLength="15"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <Field
                        component="input"
                        type="email"
                        id="Email"
                        name="email"
                        maxLength="20"
                    />
                </div>
                <div>
                    <label>Phone number</label>
                    <Field
                        component="input"
                        type="text"
                        id="phone"
                        name="phone"
                        maxLength="10"
                    />
                </div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'addUserForm',
    editable: true,
})(AddUser)

