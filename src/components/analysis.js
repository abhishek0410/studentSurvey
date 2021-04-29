// Load our saved model from current directory.
//Production: Hosted by firebase.
//Devlop    : Live-Server

import * as tf from '@tensorflow/tfjs';
  
import React,{Component} from "react";

  async function predict() {
    
  // Relative URL provided for my-model.json.
   const model = await tf.loadLayersModel('http://127.0.0.1:5500/ml_model/qq/model.json');
  // Once model is loaded, let's try using it to make a prediction!
  // Print to developer console for now.
  model.predict(tf.tensor2d([[0,1,0,1,0,1,0]])).print();
  }
class Analysis extends Component
{


  

  
  render()
  {
    predict();
  
    return(
      <div>
        <h1>Analysis</h1>
      </div>
    )
  }
}




export default Analysis;

