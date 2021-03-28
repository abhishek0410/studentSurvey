import React,{Component} from "react";
import "survey-react/survey.css";

import * as Survey from "survey-react";
import firebase from "../utils/firebase";
var uuid = require("uuid");

var studenName = "";

function nameSubmit(name)
{
    studenName = name;
}

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
    
    // this.setState({isSubmitted : true});
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

    // surveySubmit(event){
    //     console.log("Inside on submit");
    //     console.log("this.state: ",this.state);
    //     // const temp = firebase.database().ref("StudentSurvey/"+this.state.uid);
    //      const temp = firebase.database().ref("StudentSurvey");


    //     const todo =  {
    //         studentName : this.state.studentName ,
    //         answers : this.state.answers
    //     };
    //     temp.push(todo);
        
    //     this.setState({isSubmitted : true});
    // }

  

    answerSelected(event){
        var answers = this.state.answers;
        if(event.target.name === "ans1")
        {
            answers.ans1 = event.target.value;
        }

        else if(event.target.name === "ans2")
        {
            answers.ans2 = event.target.value;
        }
        else if(event.target.name === "ans3")
        {
            answers.ans3 = event.target.value;
        }
        else if(event.target.name === "ans4")
        {
            answers.ans4 = event.target.value;
        }
        else if(event.target.name === "ans5")
        {
            answers.ans5 = event.target.value;
        }
        this.setState({answers : answers}, ()=>{
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
    // this.surveySubmit = this.surveySubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    }

  
   render()
   {
       var name = "";
       var questions = "";
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

       if(this.state.studentName === "" && this.state.isSubmitted ===false)
       {
            name = <div>
            <h1> Please enter your UniId(Optional) </h1>
                <form onSubmit = {this.studentNameSubmit}>
                    <input className = "sName" type = "text" placeholder = "UniId " ref = "name"/>
                </form>
            </div>
       }

       else if(this.state.studentName !== "" && this.state.isSubmitted === false)
       {
           name = <div>
               <h1>Welcome ! {this.state.studentName}</h1>
               </div>

 
            questions = <div>
                <h2> Here are some Questions </h2>
                <form onSubmit = {this.surveySubmit}>
                    <div className ="card">
                    <label>What time do you watch the lectures ? </label><br/>
                    <input type = "radio" name = "ans1" value = "Not specific" onChange =     {this.answerSelected}/> Not specific  	
                    <input type = "radio" name = "ans1" value = "Night time"   onChange =     {this.answerSelected}/> Night time
                    <input type = "radio" name = "ans1" value = "Day time"     onChange =     {this.answerSelected}/> Day time
                    </div>

                    <div className ="card">
                    <label>Do you have a preference of posting question anonymously over non-anonymously ?  </label><br/>
                    <input type = "radio" name = "ans2" value = "Yes" onChange = {this.answerSelected}/> Yes
                    <input type = "radio" name = "ans2" value = "No" onChange = {this.answerSelected}/> No
                    </div>

                    <div className ="card">
                    <label>How often you change the speed of the lecture ?  </label><br/>
                    <input type = "radio" name = "ans3" value = "Often" onChange = {this.answerSelected}/> Often
                    <input type = "radio" name = "ans3" value = "Seldom" onChange = {this.answerSelected}/> Seldom
                    </div>

                    <div className ="card">
                    <label>If given an option, will you prefer attending the class in person  </label><br/>
                    <input type = "radio" name = "ans5" value = "Most of the Time" onChange = {this.answerSelected}/> Most of the Time
                    <input type = "radio" name = "ans5" value = "Seldom" onChange = {this.answerSelected}/> Seldom
                    </div>
                    <input className = "feedback-button" type="submit" value = "submit" type = "button"/>
                </form>
                </div>

        window.survey = new Survey.Model(question2);
       }

       if(questions === "")
       {
        return(
       
            <div>
               {name}     
            </div>
       )

       }
       else {
        return(
       
            <div>
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