import React, {Component} from 'react';
import {Router, Route,Link,IndexRoute, browserHistory} from 'react-router';

class Header extends Component{
  render(){
    return(
      <div>
        <div className="linkbox"><Link to="/" className="links">Home</Link></div>
        <div className="linkbox"><Link to="/CreateForm" className="links">CreateForm</Link></div>
        <div className="linkbox"><Link to="/TakeSurvey" className="links">Take Survey</Link></div>
        <div className="linkbox"><Link to="/ShowSurveyList" className="links">Show Survey List</Link></div>
        <div className="linkbox"><Link to="/ViewAnswers" className="links">View Answers</Link></div>
      </div>
      )
  }
}

export default Header;
