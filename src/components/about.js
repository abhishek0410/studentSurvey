import "../style/sidebar.css";
import firebase from "../utils/firebase"; 
import {Nav} from "react-bootstrap";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import Sidebar from "./sidebar.js";
import "../style/analysis.css";
import StudentSurvey from "./Survey";
const calculateCorrelation = require("calculate-correlation");
const { Component } = require("react");
var totalSurvey  = 0;


var pearSonCorr = {
    q1_q8 : 0,
    q2_q8 : 0,
    q3_q8 : 0,
    q4_q8 : 0,
    q5_q8 : 0,
    q6_q8 : 0,
    q7_q8 : 0,
    q8_q8 : 0

}

function Calculate_pearSonCorr(arrData)
{
    console.log("arrData");
    // console.log(arrData.q1_ans_Num);
    const q1 = arrData.q1_ans_Num;
    const q2 = arrData.q2_ans_Num;
    const q3 = arrData.q3_ans_Num;
    const q4 = arrData.q4_ans_Num;
    const q5 = arrData.q5_ans_Num;
    const q6 = arrData.q6_ans_Num;
    const q7 = arrData.q7_ans_Num;
    const q8 = arrData.q8_ans_Num;

    console.log("q1");
    console.log(q1);

    console.log("q8");
    console.log(q8);
    console.log("Coorelation q1-q8: ",calculateCorrelation(q1,q8));
    console.log("Coorelation q2-q8: ",calculateCorrelation(q2,q8));
    pearSonCorr.q1_q8 = calculateCorrelation(q1,q8);
    pearSonCorr.q2_q8 = calculateCorrelation(q2,q8);
    pearSonCorr.q3_q8 = calculateCorrelation(q3,q8);
    pearSonCorr.q4_q8 = calculateCorrelation(q4,q8);
    pearSonCorr.q5_q8 = calculateCorrelation(q5,q8);
    pearSonCorr.q6_q8 = calculateCorrelation(q6,q8);
    pearSonCorr.q7_q8 = calculateCorrelation(q7,q8);
    pearSonCorr.q8_q8 = calculateCorrelation(q8,q8);
    debugger;

}





var StudentResponses =
{
    q1_ans_Num : [],
    q2_ans_Num : [],
    q3_ans_Num : [], 
    q4_ans_Num : [],
    q5_ans_Num : [],
    q6_ans_Num : [],
    q7_ans_Num : [],
    q8_ans_Num : [],


    q1_ans_Cat : [],
    q2_ans_Cat : [],
    q3_ans_Cat : [],            
    q4_ans_Cat : [],
    q5_ans_Cat : [],
    q6_ans_Cat : [],
    q7_ans_Cat : [],
    q8_ans_Cat : []
};


//Import the Data from Real Time Database:
function getDataFromDB() {
    var leadsRef = firebase.database().ref('StudentSurvey');
    leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    totalSurvey++;
    var childData = childSnapshot.val();
    
    //Display the value in console
    // console.log(childData.answers);

    //Save the value in the Data Structure:
    //Questions1.
    // debugger;
    StudentResponses.q1_ans_Cat.push(childData.answers.ans1);
    if      (childData.answers.ans1 == "Not specific") {  StudentResponses.q1_ans_Num.push(0);}
            
    else if (childData.answers.ans2 == "Night time")   {  StudentResponses.q1_ans_Num.push(1);}
            
    else                                                { StudentResponses.q1_ans_Num.push(2);}
        
    //Question2.
    StudentResponses.q2_ans_Cat.push(childData.answers.ans2);
    if(childData.answers.ans2 == "Yes")
            StudentResponses.q2_ans_Num.push(0);
    else if (childData.answers.ans2 == "No")
            StudentResponses.q2_ans_Num.push(1);

    //Question3.
    StudentResponses.q3_ans_Cat.push(childData.answers.ans3);
    if(childData.answers.ans3 == "Often")
            StudentResponses.q3_ans_Num.push(0);
    else if (childData.answers.ans3 == "Seldom")
            StudentResponses.q3_ans_Num.push(1);


     //Question4.
     StudentResponses.q4_ans_Cat.push(childData.answers.ans4);
     if(childData.answers.ans4 == "Often")
             StudentResponses.q4_ans_Num.push(0);
     else if (childData.answers.ans4 == "Seldom")
             StudentResponses.q4_ans_Num.push(1);

      //Question5.
      StudentResponses.q5_ans_Cat.push(childData.answers.ans5);
      if(childData.answers.ans5 == "Yes")
              StudentResponses.q5_ans_Num.push(0);
      else if (childData.answers.ans5 == "No")
              StudentResponses.q5_ans_Num.push(1);

       //Question6.
       StudentResponses.q6_ans_Cat.push(childData.answers.ans6);
       if(childData.answers.ans6 == "Under Graduate")
               StudentResponses.q6_ans_Num.push(0);
       else if (childData.answers.ans6 == "Post Graduate")
               StudentResponses.q6_ans_Num.push(1);

        //Question7.
        StudentResponses.q7_ans_Cat.push(childData.answers.ans7);
        if(childData.answers.ans7 == "Qualitative")
                StudentResponses.q7_ans_Num.push(0);
        else if (childData.answers.ans7 == "Quantitative")
                StudentResponses.q7_ans_Num.push(1);

        //Question8.
        StudentResponses.q8_ans_Cat.push(childData.answers.ans8);
        if(childData.answers.ans8 == "Synchronous")
                StudentResponses.q8_ans_Num.push(0);
        else if (childData.answers.ans8 == "Asynchronous")
                StudentResponses.q8_ans_Num.push(1);
      });
      
    });
  }
  
class About extends Component
{
   
    state = {
        show_T_Test : false,
        showCorr    : false,
        showNeurNet : false,
        StudentResponses : {},
        pearSonCorr : {},
        dataFetched : false
    }

    handleClick = (componentSelected) =>{

        //Load the data only once.
        if(!this.state.dataFetched) getDataFromDB();

        if(componentSelected == "Correlation")
        {
            console.log("Calculating Coorelation");
            Calculate_pearSonCorr(StudentResponses);
            this.setState({dataFetched:true});
        }
    }

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
      
        // getDataFromDB();
        console.log("Total Survey: ", totalSurvey);
        console.log(StudentResponses);
        // console.log( pearSonCorr.q1_q8);
        // Calculate_pearSonCorr(StudentResponses);
        // debugger;
        // const x = [2, 5, 4, 1];
        // const y = [3, 3, 6, 7];
        // const correlation = calculateCorrelation(x, y);
        // console.log(correlation); // logs -0.442807443
      
        return (
            <>
            <h1>Pearson Correlation Coefficient</h1>
            {this.state.showCorr && 
            <div>
                Drawing histogram here
            </div>
            }   
            
            <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">      
                            <Sidebar onClickChange = {this.handleClick}/>
                        </Col>
                        <Col  xs={10} id="page-content-wrapper"></Col> 
                    </Row>
            </Container>
            </>
            );
    }
}
export default About;