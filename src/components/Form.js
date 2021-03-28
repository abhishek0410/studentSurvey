    import React,{Component} from "react";
    import "survey-react/survey.css";

    import * as Survey from "survey-react";
    import firebase from "../utils/firebase";
    var uuid = require("uuid");

    var studenName = "";

    function surveySubmit(data){
        console.log("Inside on submit",(data.question1)[0]);
        const temp = firebase.database().ref("StudentSurvey");
        const todo =  {
            studentName :  studenName,
            answers : {
            ans1 :  (data.question1)[0],
            ans2 :  (data.question2)[0],
            ans3 :  (data.question3)[0]
            }
        };
        temp.push(todo);
    };

    class StudentSurvey extends Component
    {
        studentNameSubmit(name){
            var name = this.refs.name.value;
            studenName = name;
            this.setState({studentName : name}, function(){
                //console.log("I am in studentNameSubmit: ",event);
                console.log(this.state);
            });
        
        }

        constructor(props)
        {
        super(props);  
        this.state = {
            uid:uuid.v1(),
            studentName : "" ,
            answers : {
                ans1 : '',
                ans2 : '',
                ans3 : '',
                ans4 : '',
                ans5 : '',
            },
            isSubmitted : false
        };
        this.studentNameSubmit = this.studentNameSubmit.bind(this);

        }

    
        render()
        {
            var   question2 =  {"title":"Synchronous vs Asynchronous Learning",
            "pages":
            [{"name":"page1","elements":
                [
                    {"type":"checkbox","name":"question1","title":"What time do you watch the lectures ? ","choices":
                    [{"value":"Not specific","text":"Not specific"},
                        {"value":"Night time",  "text":"Night time"},
                        {"value":"Day time",    "text":"Day time"}]},

                        {"type":"checkbox","name":"question2","title":"Do you have a preference of posting question anonymously over non-anonymously ? ","choices":
                        [{"value":"Yes", "text":"Yes"},
                        {"value":"No" , "text":"No"}]},
                
                    {"type":"checkbox","name":"question3","title":">How often you change the speed of the lecture ?","choices":
                    [{"value":"Often", "text":"Often"},
                    {"value":"Seldom" , "text":"Seldom"}]},
            
                ]
            }]
        
            
        };

            if(studenName === "" && this.state.isSubmitted ===false)
            {
                return(
                    <div>
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
                onComplete = {data=>
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