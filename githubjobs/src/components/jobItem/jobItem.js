import React, { Component } from 'react';
import './jobItem.css';

class JobItem extends Component {
  constructor(props){
    super(props);
  }
  dragCompleted(ev) {
      console.log("dragCompleted");
  }

  render(){
    return (
      <li className="item-Wrapper" draggable="true" onDragEnd={this.dragCompleted}>
        <div className="divTopLeft">
          <p className="jobTitle">{this.props.job.title}</p>
          <p className="jobCompany">{this.props.job.company} - {this.props.job.type}</p>
        </div>
        <div className="divTopRight">
          <p className="jobLocation">{this.props.job.location}</p>
          <p className="jobDate">{this.props.job.created_at}</p>
        </div>
        <button onClick = {(e) => this.props.handleFav(this.props.job)}>★</button>
      </li>
    )
  }
}

export default JobItem;


/*

onDrop={this.dragCompleted}
onDragStart={this.dragCompleted}

*/
