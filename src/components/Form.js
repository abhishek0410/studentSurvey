import React,{Component} from "react";
import firebase from "../utils/firebase";
var uuid = require("uuid");

// export default function Form()
// {
//     const [title, setTitle] = useState("");
//     const [title2, setTitle2] = useState("");
//     const handleOnChange = (e) => {
//         setTitle(e.target.value);
//     };
//     const handleOnChange2 = (e) => {
//         setTitle2(e.target.value);
//     };

//     const createTodo = () =>
//     {
//         const todoRef = firebase.database().ref("Todo"); //Call it anything you want.

//         const todo =  {
//             title,
//             title2,
//             complete : false
//         };

//         todoRef.push(todo);
//     }


//     return(
//         <div>
//         <input type = "text" onChange = {handleOnChange} value = {title}/>
//         <input type = "text" onChange = {handleOnChange2} value = {title2}/>
//         <button onClick = {createTodo}> Add Todo </button>
//         </div>
//     )
// }


class StudentSurvey extends Component
{
    studentNameSubmit(event){
        var name = this.refs.name.value;
        this.setState({studentName : name}, function(){
            //console.log("I am in studentNameSubmit: ",event);
            console.log(this.state);
        });
    }

    surveySubmit(event){
        console.log("Inside on submit");
        console.log("this.state: ",this.state);
        // const temp = firebase.database().ref("StudentSurvey/"+this.state.uid);
         const temp = firebase.database().ref("StudentSurvey");


        const todo =  {
            studentName : this.state.studentName ,
            answers : this.state.answers
        };
        temp.push(todo);
        
        this.setState({isSubmitted : true});
    }

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
    this.surveySubmit = this.surveySubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    }
   render()
   {
       var name = "";
       var questions = "";

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
                    <input type = "radio" name = "ans1" value = "Not specific"     onChange =     {this.answerSelected}/> Not specific  	
                    <input type = "radio" name = "ans1" value = "Night time" onChange =     {this.answerSelected}/> Night time
                    <input type = "radio" name = "ans1" value = "Day time"     onChange =     {this.answerSelected}/> Day time
    

                    {/* <input type = "radio" name = "ans1" value = "Sports"     onChange =     {this.answerSelected}/> Sports
                    <input type = "radio" name = "ans1" value = "Technology" onChange =     {this.answerSelected}/> Technology
                    <input type = "radio" name = "ans1" value = "Movies"     onChange =     {this.answerSelected}/> Movies
                    <input type = "radio" name = "ans1" value = "Study"      onChange =     {this.answerSelected}/> Study */}
                    </div>

                    <div className ="card">
                    <label>Do you have a preference of posting question anonymously over non-anonymously ?  </label><br/>
                    <input type = "radio" name = "ans2" value = "Yes" onChange = {this.answerSelected}/> Yes
                    <input type = "radio" name = "ans2" value = "No" onChange = {this.answerSelected}/> No
                    {/* <input type = "radio" name = "ans2" value = "Pink" onChange = {this.answerSelected}/> Pink
                    <input type = "radio" name = "ans2" value = "Yellow" onChange = {this.answerSelected}/> Yellow */}
                    </div>

                    <div className ="card">
                    <label>How often you change the speed of the lecture ?  </label><br/>
                    <input type = "radio" name = "ans3" value = "Often" onChange = {this.answerSelected}/> Often
                    <input type = "radio" name = "ans3" value = "Seldom" onChange = {this.answerSelected}/> Seldom
                    {/* <input type = "radio" name = "ans3" value = "Perth" onChange = {this.answerSelected}/> Perth
                    <input type = "radio" name = "ans3" value = "Melbourne" onChange = {this.answerSelected}/> Melbourne */}
                    </div>

                    {/* <div className ="card">
                    <label>What car is that  </label><br/>
                    <input type = "radio" name = "ans4" value = "Ford" onChange = {this.answerSelected}/> Ford
                    <input type = "radio" name = "ans4" value = "BMW" onChange = {this.answerSelected}/> BMW
                    <input type = "radio" name = "ans4" value = "Merc" onChange = {this.answerSelected}/> Merc
                    <input type = "radio" name = "ans4" value = "Nissan" onChange = {this.answerSelected}/> Nissan
                    </div> */}

                    <div className ="card">
                    <label>If given an option, will you prefer attending the class in person  </label><br/>
                    <input type = "radio" name = "ans5" value = "Most of the Time" onChange = {this.answerSelected}/> Most of the Time
                    <input type = "radio" name = "ans5" value = "Seldom" onChange = {this.answerSelected}/> Seldom
                    {/* <input type = "radio" name = "ans5" value = "Aus" onChange = {this.answerSelected}/> Aus
                    <input type = "radio" name = "ans5" value = "Russia" onChange = {this.answerSelected}/> Russia */}
                    </div>
                    <input className = "feedback-button" type="submit" value = "submit"/>
                </form>
                </div>
       }

       return(
            <div>
               {name}   
               {questions}
            </div>
       )
   } 
}


export default StudentSurvey