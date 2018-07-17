import React, { Component } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import JobItem from './components/jobItem/jobItem'
import Results from './components/results/results'
import Fav from './components/fav/fav'

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
          jobResults: [],
          jobFavs:[],
          location: '',
          jobDescription: '',
          fulltime: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFavDel = this.handleFavDel.bind(this)
    this.handleFav = this.handleFav.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  handleSubmit(data){
    this.setState({
      location: data.location,
      jobDescription: data.jobDescription
    })
    this.fetchData(data);
  }


  handleFav(data){
    this.setState({
      jobFavs: this.state.jobFavs.concat([data])
    },
    this.isFav
  );


  }

  handleFavDel(data){
    for (var i = 0; i < this.state.jobFavs.length; i++) {
      if (this.state.jobFavs[i].id == data.id) {
        if (i==0) {
          this.setState({
            jobFavs: []
          },
            this.isFav
          );
          }else {
            this.setState({
              jobFavs: this.state.jobFavs.splice((i-1), 1)
            },
              this.isFav
            );
          }
        }
      }
    }

    isFav(){
      this.forceUpdate();
      console.log(document.querySelector(".resultsList .item-Wrapper"));
      console.log(this.state.jobResults);
      console.log(this.state.jobFavs);
      for (var i = 0; i < this.state.jobResults.length; i++) {
        for (var j = 0; j < this.state.jobFavs.length; j++) {
          if (this.state.jobResults[i].id == this.state.jobFavs[j].id) {
            if (!document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.contains("inFav")) {
              document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.add("inFav");
            }
          }else{
            if (document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.contains("inFav")) {
              document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.remove("inFav");
            }
          }
        }
      }
    }






    // componentDidMount(){
    //   this.fetchData();
    // }

  fetchData(data){
    fetch('/positions.json?description='+ data.jobDescription + '&location=' + data.location)
    .then(response => response.json())
    .then(jobs =>{
      this.setState({
        jobResults: jobs
      })
    })
    .catch(error => console.log('Fetch failed: ',error))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form  handleSubmit={this.handleSubmit}/>

        <div className="jobList">
          <Results jobResults = {this.state.jobResults} handleFav = {this.handleFav}/>
          <Fav jobFavs = {this.state.jobFavs} handleFavDel = {this.handleFavDel}/>
        </div>


      </div>
    );
  }
}

export default App;
