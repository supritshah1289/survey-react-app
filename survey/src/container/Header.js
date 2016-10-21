import React, {Component} from 'react';
import {Link,browserHistory} from 'react-router';

class Header extends Component{
  render(){
    return(
      <div className="navbar navbar-inverse navbar-fixed-top container-fluid">
        <div className="container">
          <ul className="nav nav-pills">
            <li role="presentation"> <Link to="/" >Home</Link></li>
            <li role="presentation"> <Link to="/CreateForm" >CreateForm</Link></li>
            <li role="presentation"> <Link to="/TakeSurvey" >Take Survey</Link></li>
            <li role="presentation"> <Link to="/ShowSurveyList" >Show Survey List</Link></li>
            <li role="presentation"> <Link to="/ViewAnswers" >View Answers</Link></li>
          </ul>
        </div>
      </div>
      )
  }
}

export default Header;
