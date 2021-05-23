
import firebase from "../utils/firebase"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import React,{Component} from "react";
import { PieChart } from 'react-minimal-pie-chart';
import "../style/analysis.css";

class Correlation extends Component
{
  
  render()
  {
    const mystyle1 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "450px",
      fontFamily: "Arial"
    };

    const mystyle2 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "-50px",
      fontFamily: "Arial"
    }
    const mystyle3 = {
      color: "white",
      position: "absolute",
      padding: "10px",
      top : "200px",
      right : "-550px",
      fontFamily: "Arial"
    }
    // getDataFromDB();
    const labels = ['2016', '2017', '2018'];
    const data = [324, 45, 672];
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
    return(
      <div>
        <DropdownButton menuAlign="right" 
            id="dropdown-menu-align-right" title="{surveyName}" onClick = {this.retrieveDropDownData} >
            <Dropdown.Item href="#/action-1">StudentSurvey</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Course A</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Course B</Dropdown.Item>
          </DropdownButton>

        <PieChart id = "pc1"  style = {mystyle1} radius = {22}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            // { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
          <PieChart id = "pc1" radius = {22} style = {mystyle2}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
          <PieChart id = "pc1" radius = {22} style = {mystyle3}
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
        <h1>Analysis</h1>
      </div>
    )
  }
}




export default Correlation;

