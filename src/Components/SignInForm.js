import React, { Component } from "react";
import "./CSS/index.css";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

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

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    if (Object.keys(validate(this.state)).length > 0) {
      return alert("Please Check all the details");
    } else {
      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <Field
              label="email"
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              autoComplete="new-password"
              value={this.state.email}
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
              name="password"
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              component={renderField}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate
})(SignInForm);
