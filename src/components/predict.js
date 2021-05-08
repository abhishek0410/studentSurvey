import * as tf from '@tensorflow/tfjs';
const { Component } = require("react");

// class about extends CompositionEvent
async function predict() {
    
    // Relative URL provided for my-model.json.
     const model = await tf.loadLayersModel('http://127.0.0.1:5500/ml_model/qq/model.json');
    // const model = await tf.loadLayersModel('model.json');
    // Once model is loaded, let's try using it to make a prediction!
    // Print to developer console for now.
    model.predict(tf.tensor2d([[0,1,0,1,0,1,0]])).print();
    }
  


class Predict extends Component
{
    render()
    {
        predict();
        return(
            <h3>1.) Download the template</h3>
        )
    }
}
export default Predict;