import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUpAction } from "../Actions";

import validate from "./validate";
import { Field, reduxForm } from "redux-form";

const Check = ({ input, meta: { touched, error } }) => (
  <div style={{ border: touched && error ? "1px solid red" : "" }}>
    <input type="checkbox" {...input} />
  </div>
);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="FormField__Input"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    value: "",
    termsAndConditions: false
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value,
      value: value,
      termsAndConditions: !this.state.termsAndConditions
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(Object.keys(validate(this.state)).length);
    if (
      Object.keys(validate(this.state)).length > 0 ||
      this.state.termsAndConditions
    ) {
      return alert("Please Check all the details");
    } else {
      console.log("The form was submitted with the following data:");
      console.log(this.state);
      const user = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        termsAndConditions: this.state.termsAndConditions,
        userValue: this.state.value
      };

      this.props.signUpAction(user);

      console.log(validate(this.state));
    }
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <Field
              label="Enter your Full Name"
              type="name"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              component={renderField}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <Field
              label="Must Be 8 characters or more"
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
              component={renderField}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <Field
              label="E-mail"
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
              component={renderField}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="dropdown">
              I would describe my user type As
            </label>

            <select
              value={this.state.value}
              onChange={this.handleChange}
              className="FormField_Dropdown"
            >
              <option
                className="FormField_Dropdown_Option"
                defaultValue
                value="Developer"
              >
                Developer
              </option>
              <option
                className="FormField_Dropdown_Option"
                value="Solution_Architect"
              >
                Solution Architect
              </option>
              <option
                className="FormField_Dropdown_Option"
                value="Business_Analyst"
              >
                Business_Analyst
              </option>
            </select>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <Field
                className="FormField__Checkbox"
                type="checkbox"
                name="checkbox"
                value={this.state.termsAndConditions}
                onChange={this.handleChange}
                component={Check}
              />{" "}
              I agree all statements in{" "}
              <Link to="/" className="FormField__TermsLink">
                terms of service
              </Link>
            </label>
          </div>

          <div className="FormField">
            <button
              onSubmit={this.onSubmit}
              className="FormField__Button mr-20"
            >
              Sign Up
            </button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const connectSignUp = connect(null, { signUpAction })(SignUpForm);

export default reduxForm({
  form: "signUpnForm", // a unique identifier for this form
  validate
})(connectSignUp);
