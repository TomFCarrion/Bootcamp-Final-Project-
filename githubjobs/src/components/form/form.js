import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      jobDescription: '',
      fulltime:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.handleSubmit(this.state);
    this.setState({
          location: '',
          jobDescription: '',
          fulltime: ''
        }); // empty the field.
        event.preventDefault();

  }

  render() {
    return (
      <div className = "form-Wrapper">
        <form className="input" onSubmit={this.handleSubmit}>
          <h1>Find your job!</h1>
          <label className="item">
            <input type="text"  placeholder="Location" name="location" value={this.state.location} onChange={this.handleChange} />
          </label>
          <label className="item">
            <input type="text"  placeholder="Job description" name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} />
          </label>
          <label className="item">
            <input type="radio" name="fulltime" value={this.state.fulltime} onChange={this.handleChange}   />
            Full Time?
          </label>

          <input className="button" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}


export default Form;
