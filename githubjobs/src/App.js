import React, { Component } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
          location: '',
          jobDescription: '',
          fulltime: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  handleSubmit(data){
    this.setState({
      location: data.location,
      jobDescription: data.jobDescription
    })
    this.fetchData(data);
  }

  // componentDidMount(){
  //   this.fetchData();
  // }

  fetchData(data){
    fetch('jobs.github.com/positions.json?description='+ data.jobDescription + '&location=' + data.location)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log('parsing failed',error))
  }
  render() {
    return (
      <div className="App">
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
