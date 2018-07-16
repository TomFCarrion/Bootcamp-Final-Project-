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
  }

  handleSubmit(data){
    this.setState({
      location: data.location,
      jobDescription: data.jobDescription
    })
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
