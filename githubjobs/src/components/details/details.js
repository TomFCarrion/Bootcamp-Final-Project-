import React, { Component } from 'react';
import './details.css';

class Detail extends Component {
    render(){
      return(
  
        <div className="detail-Wrapper">
        <h2>{this.props.job.title}</h2>
        <h2>{this.props.job.location}</h2>
        <h3>{this.props.job.company} - {this.props.job.type}</h3>
        <h3>{this.props.job.created_at}</h3>
        <h3>{this.props.job.description}</h3>
        <h3>{this.props.job.how_to_apply}</h3>
        <h3>{this.props.job.company_url}</h3>
        <h3>{this.props.job.company_logo}</h3>
        </div>
      );
    }
  }

  export default Detail;