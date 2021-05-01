
import * as tf from '@tensorflow/tfjs';
import firebase from "../utils/firebase"; 
  
import React,{Component} from "react";

  async function predict() {
    
  // Relative URL provided for my-model.json.
   const model = await tf.loadLayersModel('http://127.0.0.1:5500/ml_model/qq/model.json');
  // const model = await tf.loadLayersModel('model.json');
  // Once model is loaded, let's try using it to make a prediction!
  // Print to developer console for now.
  model.predict(tf.tensor2d([[0,1,0,1,0,1,0]])).print();
  }

  //Import the Data from Real Time Database:
function getDataFromDB() {
  var leadsRef = firebase.database().ref('StudentSurvey');
  leadsRef.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();
  console.log(childData);
    });
  });

}

class Analysis extends Component
{
  render()
  {
    predict();
    getDataFromDB();
  
    return(
      <div>
        <h1>Analysis</h1>
      </div>
    )
  }
}




export default Analysis;

