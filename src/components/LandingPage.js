    import React,{Component} from "react";
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

    import 'bootstrap/dist/css/bootstrap.min.css';
    import "survey-react/survey.css";

    import StudentSurvey from "./Survey";
    import Analysis from "./analysis";
    import About    from "./about";
    import Predict  from "./predict";
    import Disclaimer  from "./disclaimer";


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
                        <li className="nav-item active">
                          <Link to="/predict" className="nav-link">
                            Predict
                          </Link>
                        </li>
                        <li className="nav-item active">
                          <Link to="/disclaimer" className="nav-link">
                            Disclaimer
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <Route path="/" exact component={StudentSurvey} />
                  <Route path="/about" exact component={Analysis} />
                  <Route path="/analysis" exact component={About} />
                  <Route path="/predict" exact component={Predict} />
                  <Route path="/disclaimer" exact component={Disclaimer} />
                 
                </div>
              </Router>
                )
             
        }
    }
    



    export default LandingPage;