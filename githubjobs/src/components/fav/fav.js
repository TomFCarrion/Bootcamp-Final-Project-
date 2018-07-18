import './fav.css';
import JobItem from '../jobItem/jobItem'
import React, { Component } from 'react';



class Fav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="results fav">
          <div className="favTitleContainer">
            <h1 className="title">Favourites</h1>
            <button onClick={this.props.saveFav}>Save</button>
            <button onClick={this.props.loadFav}>Load</button>
          </div>
          <ul className="results-wrapper">
            {
              this.props.jobFavs.map((job) => {
                  return <JobItem
                          job ={job}
                          key={job.id}
                          handleFav = {this.props.handleFavDel}
                          />
              })
            }
          </ul>
        </div>
    );
  }
}

export default Fav;
