import "../style/sidebar.css";
import firebase from "../utils/firebase"; 
import {Nav} from "react-bootstrap";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import Sidebar from "./sidebar.js";
import "../style/analysis.css";
const calculateCorrelation = require("calculate-correlation");
const { Component } = require("react");
var totalSurvey  = 0;
var StudentResponses =
            {
              q1_ans1_Num : 0,
              q1_ans2_Num : 0,
              q1_ans3_Num : 0,
            
              q2_ans1_Num : 0,
              q2_ans2_Num : 0,
            
              q3_ans1_Num : 0,
              q3_ans2_Num : 0,
            
              q4_ans1_Num : 0,
              q4_ans2_Num : 0,
            
              q5_ans1_Num : 0,
              q5_ans2_Num : 0,
            
              q6_ans1_Num : 0,
              q6_ans2_Num : 0,
            
              q7_ans1_Num : 0,
              q7_ans2_Num : 0,

              q8_ans1_Num : 0,
              q8_ans2_Num : 0,

              q1_ans1_Cat : 0,
              q1_ans2_Cat : 0,
              q1_ans3_Cat : 0,
            
              q2_ans1_Cat : 0,
              q2_ans2_Cat : 0,
            
              q3_ans1_Cat : 0,
              q3_ans2_Cat : 0,
            
              q4_ans1_Cat : 0,
              q4_ans2_Cat : 0,
            
              q5_ans1_Cat : 0,
              q5_ans2_Cat : 0,
            
              q6_ans1_Cat : 0,
              q6_ans2_Cat : 0,
            
              q7_ans1_Cat : 0,
              q7_ans2_Cat : 0,
                          
              q8_ans1_Cat : 0,
              q8_ans2_Cat : 0
            };

//Import the Data from Real Time Database:
function getDataFromDB() {
    var leadsRef = firebase.database().ref('StudentSurvey');
    leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    totalSurvey++;
    var childData = childSnapshot.val();
    
    //Display the value in console
    console.log(childData.answers);

      });
    });
  }
  
class About extends Component
{
    state = {
        show_T_Test : false,
        showCorr    : false,
        showNeurNet : false
    }

    handleClick = (componentSelected) =>{
        if(componentSelected == "Correlation")
        {
            console.log("Correlation selected");
            this.setState({showCorr:true});
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
      
        getDataFromDB();
        const x = [2, 5, 4, 1];
        const y = [3, 3, 6, 7];
        const correlation = calculateCorrelation(x, y);
        console.log(correlation); // logs -0.442807443
      
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