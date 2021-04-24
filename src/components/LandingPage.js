    import React,{Component} from "react";
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

    import 'bootstrap/dist/css/bootstrap.min.css';
    import "survey-react/survey.css";

    import StudentSurvey from "./Survey";
  

   

    class LandingPage extends Component
    {
        render()
        {
            return (
                <Router>
                <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" />
                    <Link to="/" className="navbar-brand">
                    <h1> Survey</h1>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <Link to="/about" className="nav-link">
                            About
                          </Link>
                        </li>
                        <li className="nav-item active">
                          <Link to="/analysis" className="nav-link">
                            Analysis
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <Route path="/" exact component={StudentSurvey} />
                  <Route path="/about" exact component={StudentSurvey} />
                 
                </div>
              </Router>
                )
             
        }
    }
    



    export default LandingPage;