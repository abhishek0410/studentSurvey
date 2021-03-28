import logo from './logo.svg';
import './App.css';
import StudentSurvey from "./components/Form";
import "survey-react/survey.css";

import * as Survey from "survey-react";


function App() {


  return (
    <div className="App">
    <h1> Survey</h1>
    <StudentSurvey/>

    {/* <Survey.Survey
       json = {surveyJSON} 
        /> */}
    </div>
  );
}

export default App;
