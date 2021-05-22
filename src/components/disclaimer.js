import "../style/about.css";
const { Component } = require("react");

// class about extends CompositionEvent



class Disclaimer extends Component
{
    render()
    {
        return(
            <div>
               <p>***This product is intended to be used to potentially deterine what mode of learning will suite a particular student.
                   This is mere an approximation and should be treated as such. ***</p>
 
                <p>The user of this product is solely responsible while making use of this product directly or indirectly.</p>
 
            </div>
            
        )
    }
}
export default Disclaimer;