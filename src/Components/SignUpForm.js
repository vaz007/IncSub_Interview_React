import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUpAction } from "../Actions";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    value: "Developer",
    hasAgreed: false
  };

  renderErorr({ error, touched }) {
    if ( error && touched ) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
      value: value
    });
  };

 
  handleSubmit = e => {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const user = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      userValue: this.state.value
    };

    this.props.signUpAction(user);
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              autoComplete="new-password"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
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
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <Link to="/" className="FormField__TermsLink">
                terms of service
              </Link>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  console.log(formValues)
  // const errors = {};
  // if (!formValues.title) {
  //   errors.title = "You must enter a title";
  // }
  // if (!formValues.description) {
  //   errors.title = "You must enter a description";
  // }
 // return errors;
};


export default connect(null, { signUpAction })(SignUpForm);
