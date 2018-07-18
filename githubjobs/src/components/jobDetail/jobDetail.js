import jobDetail from '../jobDetail/jobDetail'
import React, { Component } from 'react';



class JobDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    console.log(this.props.job);
    return (
      <div className="jobDetail">
        <h3>Job Details</h3>

        <div className="details">

          <div className="leftColumn">
            <div className="titles">
              <p>{this.props.job.title}</p>
              <p>{this.props.job.type} / {this.props.job.location}</p>
            </div>

            <div  dangerouslySetInnerHTML={{__html: this.props.job.description}}></div>
          </div>

          <div className="rightColumn">
            <div className="logoLink">
              <img src={this.props.job.company_logo} />
              <a  href={this.props.job.company_url}>Company URL</a>
            </div>
            <div className="apply">
              <h3>How to apply</h3>
              <a  href={this.props.job.url}>Visit this page!</a>
            </div>
          </div>

        </div>

      </div>

    );


  }
}

export default JobDetail;
