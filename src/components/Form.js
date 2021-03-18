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
        // firebase.database().ref("StudentSurvey/"+this.state.uid).set(
        //     {studentName : this.state.studentName ,
        //     answers : this.state.answers}
        // );
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
            <h1> Please enter your name </h1>
                <form onSubmit = {this.studentNameSubmit}>
                    <input className = "sName" type = "text" placeholder = "Please enter your Name " ref = "name"/>
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
                    <label>What are you upto </label><br/>
                    <input type = "radio" name = "ans1" value = "Sports"     onChange =     {this.answerSelected}/> Sports
                    <input type = "radio" name = "ans1" value = "Technology" onChange =     {this.answerSelected}/> Technology
                    <input type = "radio" name = "ans1" value = "Movies"     onChange =     {this.answerSelected}/> Movies
                    <input type = "radio" name = "ans1" value = "Study"      onChange =     {this.answerSelected}/> Study
                    </div>

                    <div className ="card">
                    <label>What color is that  </label><br/>
                    <input type = "radio" name = "ans2" value = "Green" onChange = {this.answerSelected}/> Green
                    <input type = "radio" name = "ans2" value = "Blue" onChange = {this.answerSelected}/> Blue
                    <input type = "radio" name = "ans2" value = "Pink" onChange = {this.answerSelected}/> Pink
                    <input type = "radio" name = "ans2" value = "Yellow" onChange = {this.answerSelected}/> Yellow
                    </div>

                    <div className ="card">
                    <label>Which city is that </label><br/>
                    <input type = "radio" name = "ans3" value = "Sydney" onChange = {this.answerSelected}/> Sydney
                    <input type = "radio" name = "ans3" value = "Canberra" onChange = {this.answerSelected}/> Canberra
                    <input type = "radio" name = "ans3" value = "Perth" onChange = {this.answerSelected}/> Perth
                    <input type = "radio" name = "ans3" value = "Melbourne" onChange = {this.answerSelected}/> Melbourne
                    </div>

                    <div className ="card">
                    <label>What car is that  </label><br/>
                    <input type = "radio" name = "ans4" value = "Ford" onChange = {this.answerSelected}/> Ford
                    <input type = "radio" name = "ans4" value = "BMW" onChange = {this.answerSelected}/> BMW
                    <input type = "radio" name = "ans4" value = "Merc" onChange = {this.answerSelected}/> Merc
                    <input type = "radio" name = "ans4" value = "Nissan" onChange = {this.answerSelected}/> Nissan
                    </div>

                    <div className ="card">
                    <label>What country is that  </label><br/>
                    <input type = "radio" name = "ans5" value = "India" onChange = {this.answerSelected}/> India
                    <input type = "radio" name = "ans5" value = "Pak" onChange = {this.answerSelected}/> Pak
                    <input type = "radio" name = "ans5" value = "Aus" onChange = {this.answerSelected}/> Aus
                    <input type = "radio" name = "ans5" value = "Russia" onChange = {this.answerSelected}/> Russia
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