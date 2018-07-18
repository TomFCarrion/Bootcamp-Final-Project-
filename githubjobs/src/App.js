import React, { Component } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import JobItem from './components/jobItem/jobItem'
import Results from './components/results/results'
import Fav from './components/fav/fav'
import JobDetail from './components/jobDetail/jobDetail'

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
          jobResults: [],
          jobFavs:[],
          location: '',
          jobDescription: '',
          fulltime: '',
          currentJob:[]
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFavDel = this.handleFavDel.bind(this)
    this.handleCurrentJob = this.handleCurrentJob.bind(this)
    this.saveToLocal = this.saveToLocal.bind(this)
    this.retrieveLocalStorage = this.retrieveLocalStorage.bind(this)
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


  handleCurrentJob(data){
    this.setState({
      currentJob: data
    }
  );
  }

  saveToLocal() {
    let local = this.state.jobFavs;
    localStorage.setItem("saveFavorites", JSON.stringify(local));
   }

   retrieveLocalStorage(){
     let aux = localStorage['saveFavorites'];
     if (aux != 'undefined') {
       let local = JSON.parse(aux);
       this.setState({
         jobFavs:local
       })
     }else{
       this.setState({
         jobFavs:[]
       })
     }
   }

  handleFav(data){
    this.setState({
      jobFavs: this.state.jobFavs.concat([data])
    },
      this.isFav
    );
  }


  handleFavDel(data){
    let aux = this.state.jobFavs;
    for (let i = 0; i < this.state.jobFavs.length; i++) {
      if (this.state.jobFavs[i].id == data.id) {
        if (this.state.jobFavs.length==1) {
          this.setState({
            jobFavs: []
          },
            this.isNotFav
          );
        }else {
          aux.splice(i,1);
          this.setState({
            jobFavs: aux
          },
            this.isNotFav
          );
        }
      }
    }
  }

    isFav(){
      for (let i = 0; i < this.state.jobResults.length; i++) {
        for (let j = 0; j < this.state.jobFavs.length; j++) {
          if (this.state.jobResults[i].id == this.state.jobFavs[j].id) {
            if (!document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.contains("inFav")) {
              document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.add("inFav");
            }
          }
        }
      }
    }

    isNotFav(){
      let flag = false;
      for (let i = 0; i < this.state.jobResults.length; i++) {
        for (let j = 0; j < this.state.jobFavs.length; j++) {
          if (this.state.jobResults[i].id == this.state.jobFavs[j].id) {
            flag = true;
          }
        }
        if (flag==false) {
          document.querySelectorAll(".resultsList .item-Wrapper")[i].classList.remove("inFav");
        }
        flag=false;
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
          <Results jobResults = {this.state.jobResults} handleFav = {this.handleFav} handleCurrentJob = {this.handleCurrentJob}/>
          <Fav jobFavs = {this.state.jobFavs} handleFavDel = {this.handleFavDel} saveFav={this.saveToLocal} loadFav={this.retrieveLocalStorage}/>
        </div>

        <JobDetail job={this.state.currentJob}/>

      </div>
    );
  }
}

export default App;
