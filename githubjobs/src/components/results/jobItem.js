import React, { Component } from 'react';
import './jobItem.css';
import './details.js';

class JobItem extends Component {
  constructor(props){
    super(props);
  } 

  render(){
    return (
      <div className="item-Wrapper">
        <h2 onClick={handleDetails(job)}>{this.props.job.title}</h2>
        <h2>{this.props.job.location}</h2>
        <h3>{this.props.job.company} - {this.props.job.type}</h3>
        <h3>{this.props.job.created_at}</h3>
      </div>
    )
  }
}

export default JobItem;
