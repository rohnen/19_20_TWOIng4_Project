import React, {Component} from 'react';
import { Container, Nav } from "./style";
import logo from './logo.svg';
import img from './img.png';
import './accueil.css';
import Widget from './Widget';
import Widget1 from './Widget1';
import Getdata from './getdata';



class Dashwidget extends Component {
    render(){
      return(
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          
          {/*1ère rangée des 4 widgets */}
          <Getdata/>
        
        
        {/*2ème rangée de 2 widgets avec recharts */}
        <Container className="row" style={{ minHeight: "100%" }}>

          <Container className="col-md-6 mb-4">
            <Container className="card is-card-dark chart-card">
              <p className="Widget">Camembert:</p>
              <Container className="chart-container large full-height">
                <Widget/>
              </Container>
            </Container>
          </Container>  

          <Container className="col-md-6 mb-4">
            <Container className="card is-card-dark chart-card">
              <p className="Widget">Camembert:</p>
              <Container className="chart-container large full-height">
                <Widget1/>
              </Container>
            </Container>
          </Container>

        </Container> 

      </Container> 
      );
    }
  }

  export default Dashwidget;
