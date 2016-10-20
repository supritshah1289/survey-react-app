import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Header from './Header.js';
import CreateForm from './CreateForm.js';
import ShowSurveyList from './ShowSurveyList.js';
import TakeSurvey from './TakeSurvey.js';
import ViewAnswers from './ViewAnswers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
