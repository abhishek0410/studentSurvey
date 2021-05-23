import React from "react";
import {Nav, Button} from "react-bootstrap";
import About    from "./about";
import Disclaimer  from "./disclaimer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style/sidebar.css";

const Side = props => {
   
    const handlOnSelect1=(someVal)=>{
        props.onClickChange("Correlation");
    }
    return (
        <>
        <Router>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            onSelect = {(event) => handlOnSelect1(event)}
            >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
            <Button onClick  = {(event) => handlOnSelect1(event)} variant="primary">Correlation</Button>{' '}
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="T_Tesing">T Tesing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Prediction_Score">Prediction Score</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Route path="/Correlation" exact component={About} />
            <Route path="/disclaimer" exact component={Disclaimer} />
            </Router>
        </>
        );
  };
 
  export default Side