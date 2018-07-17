import React, { Component } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import JobItem from './components/results/jobItem'
import Detail from './components/details/details';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
          jobDetails: [],
          jobResults: [],
          location: '',
          jobDescription: '',
          fulltime: ''
    };
    this.handleDetails = this.handleDetails
    this.handleSubmit = this.handleSubmit
    this.fetchData = this.fetchData
    this.fetchDetails = this.fetchDetails
  }

  handleSubmit = (data) => {
    this.setState({
      location: data.location,
      jobDescription: data.jobDescription
    })
    this.fetchData(data);
  }

    componentwillMount(){
       this.handleDetails();
     }

  fetchData = (data) => {
    fetch('/positions.json?description='+ data.jobDescription + '&location=' + data.location)
    .then(response => response.json())
    .then(jobs =>{
      this.setState({
        jobResults: jobs
      })
    })

    .catch(error => console.log('parsing failed',error))
  }

  handleDetails = (job) => {
   this.setState({jobDetails:job});
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
                          handleDetails={this.handleDetails}
                          />
                
              })
            }
          </ul> 
      </div>
      </div>
    );
  }
}

export default App;
