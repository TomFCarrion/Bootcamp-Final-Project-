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
    this.props.handleSubmit(this.state);
    this.setState({
          location: '',
          jobDescription: '',
          fulltime: ''
        }); // empty the field.
        event.preventDefault();

  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed', error));
  }
  render() {
    return (

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
    );
  }
}


export default Form;
