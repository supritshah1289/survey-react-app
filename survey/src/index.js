import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './container/App';
import './index.css';
import CreateForm from './container/CreateForm.js';
import ShowSurveyList from './container/ShowSurveyList.js';
import TakeSurvey from './container/TakeSurvey.js';
import ViewAnswers from './container/ViewAnswers.js';
// import Home from './container/Home.js';
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/CreateForm' component={CreateForm}></Route>
      <Route path='/TakeSurvey' component={TakeSurvey}></Route>
      <Route path='/ViewAnswers' component={ViewAnswers}></Route>
      <Route path='/ShowSurveyList' component={ShowSurveyList}></Route>
    </Route>
  </Router>
),
  document.getElementById('root')
);
