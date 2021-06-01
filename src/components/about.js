import "../style/sidebar.css";
import Histogram from 'react-chart-histogram';
import firebase from "../utils/firebase"; 

import {Container, Row, Col,Button} from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';

import Sidebar from "./sidebar.js";
import "../style/analysis.css";

const calculateCorrelation = require("calculate-correlation");
const { Component } = require("react");

var corrWith8 =  [];
var labels1 = ["Time of Watching Lectures","Preference of Posting Questions","Speed of lecture","Multitasking","Feedback","Type of Degree","Type of Course"];
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

    corrWith8.push(pearSonCorr.q1_q8);
    corrWith8.push(pearSonCorr.q2_q8);
    corrWith8.push(pearSonCorr.q3_q8);
    corrWith8.push(pearSonCorr.q4_q8);
    corrWith8.push(pearSonCorr.q5_q8);
    corrWith8.push(pearSonCorr.q6_q8);
    corrWith8.push(pearSonCorr.q7_q8);


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
  
class About extends Component
{
    constructor(props)
    {
        super(props);
        this.getDataFromDB  = this.getDataFromDB.bind(this);
    }
    state = {
        show_T_Test : false,
        showCorr    : false,
        corrCalculated : false,
        showNeurNet : false,
        StudentResponses : {
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
            },
        dataFetched : false,
        totalSurvey : 0
    }

    //Import the Data from Real Time Database:
    //Import only once.
      getDataFromDB(){
        console.log("DATA FETCHING FROM THE FIREBASE : TRYING");
        var surveyCount = 0;
        var leadsRef = firebase.database().ref('StudentSurvey');
        // leadsRef.get().then((data)=>console.log(data));
        leadsRef.on('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                console.log("Inside inner loop: ",surveyCount)
                surveyCount++;
                var childData = childSnapshot.val();
                
                //Display the value in console
                // console.log(childData.answers);
                
                //Save the value in the Data Structure:
                //Questions1.
                // debugger;
                StudentResponses.q1_ans_Cat.push(childData.answers.ans1);
                if      (childData.answers.ans1 === "Not specific") {  StudentResponses.q1_ans_Num.push(0);}
                        
                else if (childData.answers.ans2 === "Night time")   {  StudentResponses.q1_ans_Num.push(1);}
                        
                else                                                { StudentResponses.q1_ans_Num.push(2);}
                        
                //Question2.
                StudentResponses.q2_ans_Cat.push(childData.answers.ans2);
                if(childData.answers.ans2 === "Yes")
                        StudentResponses.q2_ans_Num.push(0);
                else if (childData.answers.ans2 === "No")
                        StudentResponses.q2_ans_Num.push(1);
                
                //Question3.
                StudentResponses.q3_ans_Cat.push(childData.answers.ans3);
                if(childData.answers.ans3 === "Often")
                        StudentResponses.q3_ans_Num.push(0);
                else if (childData.answers.ans3 === "Seldom")
                        StudentResponses.q3_ans_Num.push(1);
                
                
                        //Question4.
                StudentResponses.q4_ans_Cat.push(childData.answers.ans4);
                if(childData.answers.ans4 === "Often")
                        StudentResponses.q4_ans_Num.push(0);
                else if (childData.answers.ans4 === "Seldom")
                        StudentResponses.q4_ans_Num.push(1);
                
                        //Question5.
                StudentResponses.q5_ans_Cat.push(childData.answers.ans5);
                if(childData.answers.ans5 === "Yes")
                        StudentResponses.q5_ans_Num.push(0);
                else if (childData.answers.ans5 === "No")
                        StudentResponses.q5_ans_Num.push(1);
                
                //Question6.
                StudentResponses.q6_ans_Cat.push(childData.answers.ans6);
                if(childData.answers.ans6 === "Under Graduate")
                        StudentResponses.q6_ans_Num.push(0);
                else if (childData.answers.ans6 === "Post Graduate")
                        StudentResponses.q6_ans_Num.push(1);
                
                //Question7.
                StudentResponses.q7_ans_Cat.push(childData.answers.ans7);
                if(childData.answers.ans7 === "Qualitative")
                        StudentResponses.q7_ans_Num.push(0);
                else if (childData.answers.ans7 === "Quantitative")
                        StudentResponses.q7_ans_Num.push(1);
                
                //Question8.
                StudentResponses.q8_ans_Cat.push(childData.answers.ans8);
                if(childData.answers.ans8 === "Synchronous")
                        StudentResponses.q8_ans_Num.push(0);
                else if (childData.answers.ans8 === "Asynchronous")
                        StudentResponses.q8_ans_Num.push(1);
                });
                
        },(data)=>{console.log("callback")});
        if(this.state.totalSurvey !== 0)
        {
                console.log("DATA FETCHING FROM THE FIREBASE : SUCCESS");
                this.state.totalSurvey  = surveyCount;
        }
        
        
        console.log("surveyCount", surveyCount);
        this.state.totalSurvey = surveyCount;
        this.state.dataFetched = true;
        this.state.StudentResponses = StudentResponses;
        
      }

    handleClick = (componentSelected) =>{
        if(componentSelected === "Correlation" && !this.state.corrCalculated)
        {
            console.log("Calculating Coorelation");
            Calculate_pearSonCorr(this.state.StudentResponses);
            this.setState({dataFetched:true , showCorr:true , corrCalculated : true});
        }
    }
    sortVariablesByCoorelation()
    {

    }

    componentDidMount()
    {
        this.getDataFromDB();    
    }
    render()
    {
        
        console.log("Total Survey: ", this.state.totalSurvey);
        console.log(this.state.StudentResponses);
        const options = { fillColor: '#00cc99', strokeColor: '#0000FF' };
        return (
            <>
            <h1>Pearson Correlation Coefficient</h1>
            {this.state.showCorr && 
           <div className ="hist1">

        <Jumbotron>
        <h3>Variables in Order of Importance</h3>
        <p>
        Nature of Course : "Qualitative or Quantitative has the highest impact on student's preferred mode of learning"
        </p>
        <p>
        Speed of Lecture : "Whether a student prefers to change the speed of the lecture of not is directly proportional to student's preferred mode of learning"

        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>
        <Histogram
        xLabels={labels1 }
        yValues={corrWith8}
        width='600'
        height='500'
        options={options}
        />
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