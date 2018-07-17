import React, { Component } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import JobItem from './components/results/jobItem'

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
          jobResults: [],
          location: '',
          jobDescription: '',
          fulltime: ''
    };

    this.handleSubmit = this.handleSubmit
    this.fetchData = this.fetchData
  }

  handleSubmit = (data) =>{
    this.setState({
      location: data.location,
      jobDescription: data.jobDescription
    })
    this.fetchData(data);
  }

    // componentDidMount(){
    //   this.fetchData();
    // }

  fetchData = (data) => {
    fetch('jobs.github.com/positions.json?description='+ data.jobDescription + '&location=' + data.location)
    .then(response => response.json())
    .then(jobs =>{
      this.setState({
        jobResults: jobs
      })
    })

    .catch(error => console.log('parsing failed',error))
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Form  handleSubmit={this.handleSubmit}/>
        <div className="results">
          <h1 className="title">Search Results</h1>
          <ul className="results-wrapper">
            {
              this.state.jobResults.map((job) => {
                  return <JobItem
                          job ={job}
                          key={job.id}
                          />

              })
            }
          </ul>
        </div>

      <Header />
      <Form  handleSubmit={this.handleSubmit}/>

        <label>
          result:<br></br>
          location:<br></br>
            {this.state.location}
            <br></br>
          job:
            {this.state.jobDescription}
        </label>
      </div>
    );
  }
}

export default App;
