
import firebase from "../utils/firebase"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import React,{Component} from "react";
import { PieChart } from 'react-minimal-pie-chart';
import "../style/analysis.css";
import Histogram from 'react-chart-histogram';


let surveyName = "Select a Survery";
let response   =  new Map();
var Synchronous =
            {
              q1_ans1 : 0,
              q1_ans2 : 0,
              q1_ans3 : 0,
            
              q2_ans1 : 0,
              q2_ans2 : 0,
            
              q3_ans1 : 0,
              q3_ans2 : 0,
            
              q4_ans1 : 0,
              q4_ans2 : 0,
            
              q5_ans1 : 0,
              q5_ans2 : 0,
            
              q6_ans1 : 0,
              q6_ans2 : 0,
            
              q7_ans1 : 0,
              q7_ans2 : 0
            };

response.set('Asynchronous',
        {
          q1_ans1 : 0,
          q1_ans2 : 0,
          q1_ans3 : 0,

          q2_ans1 : 0,
          q2_ans2 : 0,

          q3_ans1 : 0,
          q3_ans2 : 0,

          q4_ans1 : 0,
          q4_ans2 : 0,

          q5_ans1 : 0,
          q5_ans2 : 0,

          q6_ans1 : 0,
          q6_ans2 : 0,

          q7_ans1 : 0,
          q7_ans2 : 0
        });
    
var asynchronousResponse  =  new Map();
var totalSurvey  = 0;

//Import the Data from Real Time Database:
function getDataFromDB() {


  var leadsRef = firebase.database().ref('StudentSurvey');
  leadsRef.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  totalSurvey++;
  var childData = childSnapshot.val();

  //Save the value in synchronousArray and asynchronousArray
  var surveyFinalResponse = childData.answers.ans8;
  Synchronous.q1_ans1++;

  // synchronousArray.push(childData.answers.ans8 );
    // if      (childData.answers.ans1 === 'Not specific')    { response.get('Synchronous').q1_ans1++;}
    // else if (childData.answers.ans1 === "Night time")       response.get(surveyFinalResponse).q1_ans2++;
    // else                                                    response.get(surveyFinalResponse).q1_ans3++;

    // if       (childData.answers.ans2 === "Yes")             response.get(surveyFinalResponse).q2_ans1++;   
    // else                                                    response.get(surveyFinalResponse).q2_ans2++;     
    
    // if       (childData.answers.ans3 === "Often")          response.get(surveyFinalResponse).q3_ans1++;   
    // else                                                   response.get(surveyFinalResponse).q3_ans2++; 
    
    // if       (childData.answers.ans4 === "Often")          response.get(surveyFinalResponse).q4_ans1++;   
    // else                                                   response.get(surveyFinalResponse).q4_ans2++;  

    // if       (childData.answers.ans5 === "Yes")            response.get(surveyFinalResponse).q5_ans1++;   
    // else                                                   response.get(surveyFinalResponse).q5_ans2++;  


    // if       (childData.answers.ans6 === "Under Graduate")       response.get(surveyFinalResponse).q6_ans1++;   
    // else                                                         response.get(surveyFinalResponse).q6_ans2++;  


    // if       (childData.answers.ans7 === "Qualitative")          response.get(surveyFinalResponse).q7_ans1++;   
    // else                                                         response.get(surveyFinalResponse).q7_ans2++;  


   


    console.log(Synchronous);


  // console.log(childData);
    });
  });

}

class Analysis extends Component
{
  


  render()
  {
    const mystyle1 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "450px",
      fontFamily: "Arial"
    };

    const mystyle2 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "-50px",
      fontFamily: "Arial"
    }
    const mystyle3 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "-550px",
      fontFamily: "Arial"
    }
    getDataFromDB();
    const labels = ['2016', '2017', '2018'];
    const data = [324, 45, 672];
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
    return(
      <div>
        <DropdownButton menuAlign="right" 
            id="dropdown-menu-align-right" title="{surveyName}" onClick = {this.retrieveDropDownData} >
            <Dropdown.Item href="#/action-1">StudentSurvey</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Course A</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Course B</Dropdown.Item>
          </DropdownButton>

        <PieChart id = "pc1"  style = {mystyle1} radius = {22}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            // { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
          <PieChart id = "pc1" radius = {22} style = {mystyle2}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
          <PieChart id = "pc1" radius = {22} style = {mystyle3}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
        <h1>Analysis</h1>
      </div>
    )
  }
}




export default Analysis;

