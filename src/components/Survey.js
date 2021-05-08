import React,{Component} from "react";
import * as Survey from "survey-react";
import firebase from "../utils/firebase";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import "survey-react/survey.css";
import "../style/survey.css";


var uuid = require("uuid")
    
var studenName = "";
var surveyName = "Select a Survery";




function surveySubmit(data){
    console.log("Inside on submit",(data.question1)[0]);
    //const temp = firebase.database().ref("StudentSurvey");
    const temp = firebase.database().ref(surveyName);
    const todo =  {
        studentName :  studenName,
        answers : {
        ans1 :  (data.question1)[0],
        ans2 :  (data.question2)[0],
        ans3 :  (data.question3)[0],
        ans4 :  (data.question4)[0],
        ans5 :  (data.question5)[0],
        ans6 :  (data.question6)[0],
        ans7 :  (data.question7)[0],
        ans8 :  (data.question8)[0]
        }
    };
    temp.push(todo);
    studenName = "";
};


class StudentSurvey extends Component
{
    studentNameSubmit(name)
    {
        // var name = this.refs.name.value;
        name = "You Are Anonymous";
        if(this.refs.name.value !== "") name = this.refs.name.value;
        console.log("name: ", name);
        studenName = name;
        this.setState({studentName : name}, function(){
            console.log(this.state);
        });
    }

    retrieveDropDownData =(data)=>
    {
        surveyName = data.target.text;
        this.setState({surveyName : surveyName}, function(){
        });
    }

    constructor(props)
    {
        super(props);  
        this.state = 
        {
            uid:uuid.v1(),
            studentName : "" ,
            surveyName : "",
            isSubmitted : false
        };
        this.studentNameSubmit = this.studentNameSubmit.bind(this);
        this.retrieveDropDownData = this.retrieveDropDownData.bind(this);
    }


    render()
    {
        var   question2 =  
        {"title":"Synchronous vs Asynchronous Learning","pages":
            [{"name":"page1","elements":
                [
                    {"type":"checkbox","name":"question1","title":"What time do you watch the lectures ? ","choices":
                        [
                            {"value":"Not specific","text":"Not specific"},
                            {"value":"Night time",  "text":"Night time"},
                            {"value":"Day time",    "text":"Day time"}
                        ]
                    },

                    {"type":"checkbox","name":"question2","title":"Do you have a preference of posting question anonymously over non-anonymously ? ","choices":
                        [
                            {"value":"Yes", "text":"Yes"},
                            {"value":"No" , "text":"No"}
                        ]
                    },
                
                    {"type":"checkbox","name":"question3","title":"How often you change the speed of the lecture ?","choices":
                        [
                            {"value":"Often", "text":"Often"},
                            {"value":"Seldom" , "text":"Seldom"}
                        ]
                    },

                    {"type":"checkbox","name":"question4","title":" Do you prefer mult-tasking while you are watching the lecutures ?","choices":
                        [
                            {"value":"Often", "text":"Often"},
                            {"value":"Seldom" , "text":"Seldom"}
                        ]
                    },

                    {"type":"checkbox","name":"question5","title":" Does immidiate feedback matter to you ?","choices":
                        [
                            {"value":"Yes", "text":"Yes"},
                            {"value":"No" , "text":"No"}
                        ]
                    },

                    {"type":"checkbox","name":"question6","title":" Are you an undergraduate or post-graduate student ?","choices":
                        [
                            {"value":"Under Graduate", "text":"Under Graduate"},
                            {"value":"Post Graduate" , "text":"Post Graduate"}
                        ]
                    },

                    {"type":"checkbox","name":"question7",
                        "title":" Are most of your the courses you study of Qualitative or Quantitative Nature ? Note : Qualitative : Loosely speaking, something not involving any sort of numerical calculations. Quantitative: Something which does require numerical calculations."
                        ,"choices":
                        [
                            {"value":"Qualitative", "text":"Qualitative"},
                            {"value":"Quantitative" , "text":"Quantitative"}
                        ]
                    },

                    {"type":"checkbox","name":"question8","title":" Do you prefer Synchronous or Asynchronous Learning ?","choices":
                        [
                            {"value":"Synchronous",  "text":"Synchronous"},
                            {"value":"Asynchronous" , "text":"Asynchronous"}
                        ]
                    },
                ]
            }]   
        };

        if(studenName === "" && this.state.isSubmitted ===false)
        {
            return(
                <div>
                    <DropdownButton menuAlign="right"
                    id="dropdown-menu-align-right" title={surveyName} onClick = {this.retrieveDropDownData} >
                    <Dropdown.Item href="#/action-1">StudentSurvey</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Course A</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Course B</Dropdown.Item>
                    </DropdownButton>
                <h1> Please enter your UniId(Optional) </h1>
                    <form onSubmit = {this.studentNameSubmit}>
                        <input className = "sName" type = "text" placeholder = "UniId " ref = "name"/>
                    </form>
                </div>
            )  
        }

        else if(studenName!== "" && this.state.isSubmitted === false)
        {
            return(
            <div>
                <h1>Welcome ! {studenName}</h1>
                <Survey.Survey
                onComplete = 
                {(data)=>
                    {
                        console.log(data.valuesHash);
                        surveySubmit(data.valuesHash);

                    }
                }
                json = {question2} />
            </div>

            )
        }
    }

    
}

export default StudentSurvey;