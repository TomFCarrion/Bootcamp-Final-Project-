import JobItem from '../jobItem/jobItem'
import React, { Component } from 'react';



class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="results resultsList">
          <h1 className="title">Results</h1>
          <ul className="results-wrapper">
            {
              this.props.jobResults.map((job) => {
                  return <JobItem
                          job ={job}
                          key={job.id}
                          handleFav = {this.props.handleFav}
                          handleCurrentJob={this.props.handleCurrentJob}
                          />
              })
            }
          </ul>
        </div>
    );
  }
}

export default Results;
