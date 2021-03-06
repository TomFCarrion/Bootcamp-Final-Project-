import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      jobDescription: '',
      fulltime:''
    };

    this.handleChange = this.handleChange;
    this.handleSubmit = this.handleSubmit;
  }

  //no need to use bind() if you use arrow functions as they do it automatically
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
          location: '',
          jobDescription: '',
          fulltime: ''
        }); // empty the field.
  }

  getInitialState =  () => {
    return {
      fulltime: false
    }
  }

  handleOptionChange= (changeEvent) => {
    if(this.state.fulltime==true)
    {
      this.setState({
        selectedOption: false
      });
    } else{
      this.setState({
        selectedOption: true
      });
    }

  }


  render() {
    return (
      <div className = "form-Wrapper">
        <form className="input" onSubmit={this.handleSubmit}>
          <h1>Find your job!</h1>
          <label className="item">
            <input  className="inputStyle" type="text"  placeholder="Location" name="location" value={this.state.location} onChange={this.handleChange} />
          </label>
          <label className="item">
            <input className="inputStyle" type="text"  placeholder="Job description" name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} />
          </label>
          <label className="item">
            <input type="checkbox" name="fulltime" value={this.state.fulltime}  onChange={this.handleOptionChange}   />
            Full Time?
          </label>

          <input className="button" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}


export default Form;
